import type { ReactNode } from 'react';
import React, { useCallback, useEffect, useState } from 'react';
import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue';
import { log } from '@helpers/Logger';
import type { IDiskFreeReturn, IInfoResult } from '@ridenui/unraid/dist/modules/system/extensions';
import type { IdentConfig, RichNotification } from '@ridenui/unraid/dist/modules/unraid/extensions';
import { parse } from 'date-fns';
import { DEBUG } from '../constants';
import { useUnraid } from './Unraid.context';

if (DEBUG) {
  MessageQueue.spy((spyData: SpyData) => {
    if (spyData.module === 'RCTDeviceEventEmitter' || spyData.module === 'SSH') {
      console.log({ spyData });
    }
  });
}

type ServerProviderProps = {
  children: ReactNode;
};

export type ReloadableProperties = 'notifications';

export type ServerProviderValue = {
  hostname: string;
  identConfig: IdentConfig | null;
  systemInfo: IInfoResult | null;
  caseModel: string | null;
  uptime: Date | null;
  diskUsage: IDiskFreeReturn[] | null;
  notifications: RichNotification[];
  reloadProperties: () => void;
  reloadProperty: (property: ReloadableProperties) => void;
  resetProperties: () => void;
  isReloading: boolean;
};

const initialServerState: ServerProviderValue = {
  hostname: '',
  identConfig: null,
  systemInfo: null,
  caseModel: null,
  uptime: null,
  notifications: [],
  reloadProperties: () => {},
  reloadProperty: () => {},
  resetProperties: () => {},
  isReloading: false,
  diskUsage: null,
};

const ServerContext = React.createContext<ServerProviderValue>(initialServerState);

export function ServerProvider({ children }: ServerProviderProps): JSX.Element {
  const [hostname, setHostname] = useState<string>('');
  const [isReloading, setIsReloading] = useState<boolean>(false);
  const [identConfig, setIdentConfig] = useState<IdentConfig | null>(null);
  const [systemInfo, setSystemInfo] = useState<IInfoResult | null>(null);
  const [caseModel, setCaseModel] = useState<string | null>(null);
  const [uptime, setUptime] = useState<Date | null>(null);
  const [diskUsage, setDiskUsage] = useState<IDiskFreeReturn[] | null>(null);
  const [notifications, setNotifications] = useState<RichNotification[]>([]);
  const { instance } = useUnraid();

  const reloadProperties = useCallback(async () => {
    setIsReloading(true);
    try {
      if (instance) {
        const tasks: [() => Promise<unknown>, string][] = [
          [async () => setHostname(await instance.system.getHostname()), 'hostname'],
          [async () => setIdentConfig(await instance.unraid.getIdentConfig()), 'ident'],
          [async () => setSystemInfo(await instance.system.info()), 'info'],
          [async () => setCaseModel(await instance.unraid.getCaseModel()), 'case'],
          [async () => setDiskUsage(await instance.system.diskfree()), 'diskfree'],
          [async () => setNotifications(await instance.unraid.getNotifications()), 'notifications'],
          [
            async () => {
              const { raw } = await instance.system.uptime();
              if (DEBUG) {
                log.debug('got uptime');
              }
              const parsedUptime = parse(raw, 'yyyy-MM-dd HH:mm:ss', new Date());
              setUptime(parsedUptime);
            },
            'uptime',
          ],
        ];

        if (DEBUG) {
          log.debug('reloading server properties');
        }

        await Promise.all(
          tasks.map(([task, name]) => {
            return (async () => {
              log.debug(`+ reloading ${name}`);
              await task();
              log.debug(`- reloading ${name}`);
            })();
          }),
        );
      }
    } catch (e) {
      log.error(`Error while reloading data: ${e}`);
    } finally {
      setIsReloading(false);
      if (DEBUG) {
        log.debug('finished reloading');
      }
    }
  }, [instance]);

  const resetProperties = useCallback(async () => {
    setHostname('');
    setIsReloading(false);
    setIdentConfig(null);
    setSystemInfo(null);
    setCaseModel(null);
    setUptime(null);
    setDiskUsage(null);
    setNotifications([]);
  }, []);

  const reloadProperty = useCallback(
    async (property: ReloadableProperties) => {
      if (!instance) {
        log.error(`Unable to reload property "${property}". Instance is not defined.`);

        return;
      }
      log.debug(`Attempting to reload "${property}"`);
      setIsReloading(true);
      try {
        if (property === 'notifications') {
          setNotifications(await instance.unraid.getNotifications());
          log.info('Reloaded Property Notifications');
        }
      } catch (e) {
        log.error(`Error while reloading "${property}"`);
      } finally {
        setIsReloading(false);
      }
    },
    [instance],
  );

  useEffect(() => {
    reloadProperties().then(() => {
      log.debug('Reloaded Server Properties');
    });
  }, [reloadProperties]);

  return (
    <ServerContext.Provider
      value={{
        hostname,
        identConfig,
        systemInfo,
        caseModel,
        uptime,
        notifications,
        reloadProperties,
        reloadProperty,
        resetProperties,
        isReloading,
        diskUsage,
      }}
    >
      {children}
    </ServerContext.Provider>
  );
}

export function useServer(): ServerProviderValue {
  const context = React.useContext(ServerContext);
  if (context === undefined) {
    throw new Error('useServer must be used within a ServerProvider');
  }

  return context;
}

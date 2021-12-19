import type { ReactNode } from 'react';
import React, { useCallback, useEffect, useState } from 'react';
import type { IDiskFreeReturn, IInfoResult } from '@ridenui/unraid/dist/modules/system/extensions';
import type { IdentConfig } from '@ridenui/unraid/dist/modules/unraid/extensions';
import { parse } from 'date-fns';
import { useUnraid } from './Unraid.context';

type ServerProviderProps = {
  children: ReactNode;
};

export type ServerProviderValue = {
  hostname: string;
  identConfig: IdentConfig | null;
  systemInfo: IInfoResult | null;
  caseModel: string | null;
  uptime: Date | null;
  diskUsage: IDiskFreeReturn[] | null;
  reloadProperties: () => void;
  isReloading: boolean;
};

const initialServerState: ServerProviderValue = {
  hostname: '',
  identConfig: null,
  systemInfo: null,
  caseModel: null,
  uptime: null,
  reloadProperties: () => {},
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
  const { instance } = useUnraid();

  const reloadProperties = useCallback(async () => {
    setIsReloading(true);
    if (instance) {
      console.log('reloading properties');
      setHostname(await instance.system.getHostname());
      setIdentConfig(await instance.unraid.getIdentConfig());
      setSystemInfo(await instance.system.info());
      setCaseModel(await instance.unraid.getCaseModel());
      setDiskUsage(await instance.system.diskfree());
      const { raw } = await instance.system.uptime();
      const parsedUptime = parse(raw, 'yyyy-MM-dd HH:mm:ss', new Date());
      setUptime(parsedUptime);
      setIsReloading(false);
    }
  }, [instance]);

  useEffect(() => {
    reloadProperties().then(() => {
      console.log('Reloaded Properties');
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
        reloadProperties,
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

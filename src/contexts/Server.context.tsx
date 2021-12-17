import type { ReactNode } from 'react';
import React, { useEffect, useState, useCallback } from 'react';
import { useUnraid } from './Unraid.context';
import { IdentConfig } from '@ridenui/unraid/dist/modules/unraid/extensions';
import { IInfoResult } from '@ridenui/unraid/dist/modules/system/extensions';
import { parse } from 'date-fns';

type ServerProviderProps = {
  children: ReactNode;
};

export type ServerProviderValue = {
  hostname: string;
  identConfig: IdentConfig | null;
  systemInfo: IInfoResult | null;
  caseModel: string | null;
  uptime: Date | null;
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
};

const ServerContext = React.createContext<ServerProviderValue>(initialServerState as ServerProviderValue);

export function ServerProvider({ children }: ServerProviderProps): JSX.Element {
  const [hostname, setHostname] = useState<string>('');
  const [isReloading, setIsReloading] = useState<boolean>(false);
  const [identConfig, setIdentConfig] = useState<IdentConfig | null>(null);
  const [systemInfo, setSystemInfo] = useState<IInfoResult | null>(null);
  const [caseModel, setCaseModel] = useState<string | null>(null);
  const [uptime, setUptime] = useState<Date | null>(null);
  const { instance } = useUnraid();

  const reloadProperties = useCallback(async () => {
    setIsReloading(true);
    if (instance) {
      console.log('reloading properties');
      setHostname(await instance.system.getHostname());
      setIdentConfig(await instance.unraid.getIdentConfig());
      setSystemInfo(await instance.system.info());
      setCaseModel(await instance.unraid.getCaseModel());
      const { raw } = await instance.system.uptime();
      const parsedUptime = parse(raw, 'yyyy-MM-dd HH:mm:ss', new Date());
      console.log(parsedUptime);
      console.log(raw);
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

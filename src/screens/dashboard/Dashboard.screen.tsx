import React, { useEffect, useState } from 'react';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import * as S from './Dashboard.styled';
import { useServer } from '../../contexts/Server.context';
import formatRelative from 'date-fns/formatRelative';
import { caseModelToIconName } from '@helpers/formatters';
import { RefreshControl, ScrollView } from 'react-native';
import { IconProps } from '@atoms/Icon/Icon';
import { getDateFnsLocale } from '@helpers/Locales';
import { useLocalization } from '../../contexts/Localization.context';
import { DiskUsageWidget } from '@molecules/DiskUsageWidget/DiskUsageWidget';
import { CpuUsageWidget } from '@molecules/CpuUsageWidget/CpuUsageWidget';

export function DashboardScreen() {
  const { hostname, systemInfo, caseModel, reloadProperties, isReloading, uptime, identConfig, diskUsage } =
    useServer();
  const [caseModelIconName, setCaseModelIconName] = useState<IconProps['type']>('vm');
  const { country } = useLocalization();

  useEffect(() => {
    setCaseModelIconName(caseModelToIconName(caseModel || 'vm'));
  }, [caseModel]);

  return (
    <S.Container>
      <ScrollView refreshControl={<RefreshControl refreshing={isReloading} onRefresh={reloadProperties} />}>
        <S.ServerInfoBox>
          <S.ServerInfoText>
            <Typography variant={TypographyVariants.H3}>{hostname}</Typography>
            <Typography variant={TypographyVariants.Paragraph}>{identConfig?.comment}</Typography>
            {uptime && (
              <Typography variant={TypographyVariants.Paragraph}>
                Up since{' '}
                {formatRelative(uptime, new Date(), {
                  locale: getDateFnsLocale(country),
                })}
              </Typography>
            )}
            <Typography variant={TypographyVariants.Paragraph}>
              {systemInfo?.manufacturer} {systemInfo?.productName}
            </Typography>
          </S.ServerInfoText>
          <S.ServerCaseIcon iconProps={{ height: 80, width: 100 }} type={caseModelIconName} />
        </S.ServerInfoBox>
        {diskUsage && <DiskUsageWidget />}
        <CpuUsageWidget />
      </ScrollView>
    </S.Container>
  );
}

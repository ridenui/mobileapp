import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import type { IconProps } from '@atoms/CaseIcon/CaseIcon';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { caseModelToIconName } from '@helpers/formatters';
import { CpuUsageWidget } from '@molecules/CpuUsageWidget/CpuUsageWidget';
import { DiskUsageWidget } from '@molecules/DiskUsageWidget/DiskUsageWidget';
import formatRelative from 'date-fns/formatRelative';
import { useLocalization } from '../../contexts/Localization.context';
import { useServer } from '../../contexts/Server.context';
import * as S from './Dashboard.styled';

export function DashboardScreen() {
  const { hostname, systemInfo, caseModel, reloadProperties, isReloading, uptime, identConfig, diskUsage } =
    useServer();
  const [caseModelIconName, setCaseModelIconName] = useState<IconProps['type']>('vm');
  const { dateFnsLocale } = useLocalization();

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
                  locale: dateFnsLocale,
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

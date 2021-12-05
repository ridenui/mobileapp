import React, { useEffect, useState } from 'react';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import * as S from './Dashboard.styled';
import { Box } from '@atoms/Box/Box';
import { useServer } from '../../contexts/Server.context';
import formatRelative from 'date-fns/formatRelative';
import { caseModelToIconName } from '@helpers/formatters';
import { RefreshControl, ScrollView, View } from 'react-native';
import { IconProps } from '@atoms/Icon/Icon';

const demoDate = new Date('2021-10-01');

export function DashboardScreen() {
  const { hostname, systemInfo, caseModel, reloadProperties, isReloading } = useServer();
  const [caseModelIconName, setCaseModelIconName] = useState<IconProps['type']>('vm');

  useEffect(() => {
    setCaseModelIconName(caseModelToIconName(caseModel || 'vm'));
  }, [caseModel]);

  return (
    <S.Container>
      <ScrollView refreshControl={<RefreshControl refreshing={isReloading} onRefresh={reloadProperties} />}>
        <S.ServerInfoBox>
          <View>
            <Typography variant={TypographyVariants.H3}>{hostname}</Typography>
            <Typography variant={TypographyVariants.Paragraph}>{'its on the web'}</Typography>
            <Typography variant={TypographyVariants.Paragraph}>
              Up since {formatRelative(demoDate, new Date())}
            </Typography>
            <Typography variant={TypographyVariants.Paragraph}>
              {systemInfo?.manufacturer} {systemInfo?.productName}
            </Typography>
          </View>
          <S.ServerCaseIcon iconProps={{ height: 80, width: 200 }} type={caseModelIconName} />
        </S.ServerInfoBox>
      </ScrollView>
    </S.Container>
  );
}

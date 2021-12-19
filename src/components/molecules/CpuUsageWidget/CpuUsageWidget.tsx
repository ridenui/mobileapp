import React, { useEffect, useState } from 'react';
import * as S from './CpuUsageWidget.styled';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { useUnraid } from '../../../contexts/Unraid.context';
import { CPUUsage } from '@ridenui/unraid/dist/modules/system/extensions/cpu';
import { CpuCoreUsage } from '@molecules/CpuCoreUsage/CpuCoreUsage';
import { LegendItem } from '@atoms/LegendItem/LegendItem';
import { Colors } from '@styles/Colors';

/**
 * CPU Usage with Live Updates. WOW!
 */
export function CpuUsageWidget(): JSX.Element {
  const { instance } = useUnraid();
  const [cpuUsage, setCpuUsage] = useState<CPUUsage | null>(null);

  useEffect(() => {
    if (!instance) {
      return;
    }

    const interval = setInterval(() => {
      instance.system.usage().then(usage => {
        setCpuUsage(usage);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [instance]);

  if (!cpuUsage) {
    return (
      <S.CpuUsageWidget header={'CPU'}>
        <Typography variant={TypographyVariants.Paragraph}>Loading...</Typography>
      </S.CpuUsageWidget>
    );
  }

  const { cores } = cpuUsage;

  return (
    <S.CpuUsageWidget>
      <S.WidgetHeader>
        <Typography variant={TypographyVariants.H3}>CPU</Typography>
        <Typography variant={TypographyVariants.Paragraph}>
          {cores.length} {cores.length === 1 ? 'Core' : 'Cores'}
        </Typography>
      </S.WidgetHeader>
      {cores.map(core => {
        return <CpuCoreUsage key={core.core} core={core} />;
      })}
      <S.LegendGroup>
        <S.Legend>
          <LegendItem color={Colors.red}>System</LegendItem>
        </S.Legend>
        <S.Legend>
          <LegendItem color={Colors.blue}>User</LegendItem>
        </S.Legend>
        <S.Legend>
          <LegendItem color={Colors.grey}>IO Wait</LegendItem>
        </S.Legend>
        <S.Legend>
          <LegendItem color={Colors.green}>Nice</LegendItem>
        </S.Legend>
        <S.Legend>
          <LegendItem color={Colors.aqua}>Software Interrupts</LegendItem>
        </S.Legend>
        <S.Legend>
          <LegendItem color={Colors.violet}>Hardware Interrupts</LegendItem>
        </S.Legend>
        <S.Legend>
          <LegendItem color={Colors.orange}>Steal</LegendItem>
        </S.Legend>
      </S.LegendGroup>
    </S.CpuUsageWidget>
  );
}

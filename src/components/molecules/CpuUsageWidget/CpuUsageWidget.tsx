import React, { useEffect, useState } from 'react';
import { LegendItem } from '@atoms/LegendItem/LegendItem';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { CpuCoreUsage } from '@molecules/CpuCoreUsage/CpuCoreUsage';
import type { CPUUsage } from '@ridenui/unraid/dist/modules/system/extensions/cpu';
import { Colors } from '@styles/Colors';
import { useSettings } from '../../../contexts/Settings.context';
import { useUnraid } from '../../../contexts/Unraid.context';
import * as S from './CpuUsageWidget.styled';

/**
 * CPU Usage with Live Updates. WOW!
 */
export function CpuUsageWidget(): JSX.Element {
  const { instance } = useUnraid();
  const { dashboard } = useSettings();
  const [cpuUsage, setCpuUsage] = useState<CPUUsage | null>(null);

  useEffect(() => {
    if (!instance) {
      return undefined;
    }

    const fetchUsage = () => {
      instance.system.usage().then((usage) => {
        setCpuUsage(usage);
      });
    };

    fetchUsage();

    let interval: NodeJS.Timer;

    // 0 means no refresh
    if (dashboard.cpuRefresh !== 0) {
      interval = setInterval(() => {
        console.log('refreshing...');
        fetchUsage();
      }, dashboard.cpuRefresh);
    }

    return () => {
      if (interval) {
        console.log('Clearing inv');
        clearInterval(interval);
      }
    };
  }, [instance, dashboard.cpuRefresh]);

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
      {cores.map((core) => {
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

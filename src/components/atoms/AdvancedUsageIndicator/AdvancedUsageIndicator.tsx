import React from 'react';
import * as S from './AdvancedUsageIndicator.styled';
import { AnimatedCpuUsage } from '@molecules/CpuCoreUsage/CpuCoreUsage';

export interface AdvancedUsageIndicatorProps {
  usages: AnimatedCpuUsage[];
}

export function AdvancedUsageIndicator({ usages }: AdvancedUsageIndicatorProps): JSX.Element {
  return (
    <S.AdvancedUsageIndicator>
      <S.IndicatorWrapper>
        {usages.map(usage => {
          return (
            <S.Indicator
              key={usage.name}
              style={{ width: usage.usage }}
              isFirst={!!usage.isFirst}
              isLast={!!usage.isLast}
              color={usage.color}
            />
          );
        })}
      </S.IndicatorWrapper>
    </S.AdvancedUsageIndicator>
  );
}

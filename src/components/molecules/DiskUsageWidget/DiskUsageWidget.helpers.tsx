import * as S from '@molecules/DiskUsageWidget/DiskUsageWidget.styled';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { UsageIndicator } from '@atoms/UsageIndicator/UsageIndicator';
import React from 'react';
import { IDiskFreeReturn } from '@ridenui/unraid/dist/modules/system/extensions';

export function calculateUsageInPercentage(used: number, available: number) {
  return used / (used + available);
}

export type StorageUsageRow = {
  diskUsage: IDiskFreeReturn;
};

export function StorageUsageRow({ diskUsage }: StorageUsageRow) {
  const { used, available, mounted } = diskUsage;
  const usage = calculateUsageInPercentage(used, available);
  return (
    <S.DiskBox key={mounted}>
      <S.DiskBoxText>
        <Typography variant={TypographyVariants.Paragraph}>{mounted}</Typography>
        <Typography variant={TypographyVariants.Paragraph}>{Math.round(usage * 100)}%</Typography>
      </S.DiskBoxText>
      <UsageIndicator usage={usage} />
    </S.DiskBox>
  );
}

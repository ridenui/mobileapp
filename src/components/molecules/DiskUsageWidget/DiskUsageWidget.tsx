import React, { useEffect, useState } from 'react';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { StorageUsageRow } from '@molecules/DiskUsageWidget/DiskUsageWidget.helpers';
import type { IDiskFreeReturn } from '@ridenui/unraid/dist/modules/system/extensions';
import { useServer } from '../../../contexts/Server.context';
import * as S from './DiskUsageWidget.styled';

/**
 * Renders Disk Usage by all /mnt/* drives.
 */
export function DiskUsageWidget(): JSX.Element {
  const { diskUsage } = useServer();
  const [filteredDiskUsage, setFilteredDiskUsage] = useState<IDiskFreeReturn[]>([]);
  const [externalDrivesUsage, setExternalDrivesUsage] = useState<IDiskFreeReturn[]>([]);

  useEffect(() => {
    const filtered = diskUsage?.filter((entry) => {
      return entry.mounted.startsWith('/mnt/') && !entry.mounted.startsWith('/mnt/disks');
    });
    const external = diskUsage?.filter((entry) => {
      return entry.mounted.startsWith('/mnt/disks') && entry.mounted !== '/mnt/disks';
    });

    setFilteredDiskUsage(filtered || []);
    setExternalDrivesUsage(external || []);
  }, [diskUsage]);

  return (
    <S.DiskUsageWidget header={'Disks'}>
      {filteredDiskUsage.map((disk) => {
        return <StorageUsageRow key={disk.mounted} diskUsage={disk} />;
      })}
      {externalDrivesUsage.length !== 0 && (
        <S.External>
          <Typography variant={TypographyVariants.H4}>External Drives</Typography>
          {externalDrivesUsage.map((drive) => {
            return <StorageUsageRow key={drive.mounted} diskUsage={drive} />;
          })}
        </S.External>
      )}
    </S.DiskUsageWidget>
  );
}

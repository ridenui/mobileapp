import React, { useEffect, useState } from 'react';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { DefaultIcon } from '@molecules/ContainerCard/DefaultIcon';
import type { Container } from '@ridenui/unraid/dist/modules/docker/container';
import * as S from './ContainerCard.styled';

export interface ContainerCardProps {
  container: Container;
}

/**
 * Description of ContainerCard.
 */
export function ContainerCard({ container }: ContainerCardProps): JSX.Element {
  const [image, setImage] = useState(`data:image/png;base64,${DefaultIcon}`);

  useEffect(() => {
    container.getImage().then((img) => {
      setImage(`data:image/png;base64,${img}`);
    });
  }, [container]);

  return (
    <S.ContainerCard>
      <S.ContainerIcon source={{ uri: image }} />
      <Typography variant={TypographyVariants.H3}>{container.name}</Typography>
    </S.ContainerCard>
  );
}

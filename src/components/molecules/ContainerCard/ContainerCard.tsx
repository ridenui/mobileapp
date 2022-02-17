import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Icon } from '@atoms/Icon/Icon';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { log } from '@helpers/Logger';
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
    container
      .getImage()
      .then((img) => {
        setImage(`data:image/png;base64,${img}`);
        log.debug(`Loaded image for container "${container.name}"`);
      })
      .catch((e) => {
        log.error(`Unable to load image for container "${container.name}". ${e}`);
      });
  }, [container]);

  return (
    <S.ContainerCard>
      <S.ContainerIcon source={{ uri: image }} />
      <View>
        <Typography variant={TypographyVariants.H3}>{container.name}</Typography>
        <Typography variant={TypographyVariants.Small}>{container.state}</Typography>
      </View>
      <S.Icon>
        <Icon name={'chevron-right'} size={32} />
      </S.Icon>
    </S.ContainerCard>
  );
}

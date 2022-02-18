import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Icon } from '@atoms/Icon/Icon';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { log } from '@helpers/Logger';
import { readFromStorage } from '@helpers/Storage';
import { DefaultIcon } from '@molecules/ContainerCard/DefaultIcon';
import type { Container } from '@ridenui/unraid/dist/modules/docker/container';
import * as S from './ContainerCard.styled';

export interface ContainerCardProps {
  container: Container;
}

const imagePrefix = 'data:image/png;base64,';

/**
 * Description of ContainerCard.
 */
export function ContainerCard({ container }: ContainerCardProps): JSX.Element {
  const [image, setImage] = useState(imagePrefix + DefaultIcon);

  useEffect(() => {
    const loadImage = async () => {
      log.debug(`Loading image for container ${container.name}`);
      const cachedImage = await readFromStorage(`docker:image:${container.name}`);
      if (cachedImage) {
        log.debug(`Image-Cache-Hit for ${container.name}.`);
        const [checksum, encoded] = cachedImage.split(':');
        setImage(imagePrefix + encoded);
        const freshChecksum = await container.getImageChecksum();
        if (freshChecksum !== checksum) {
          log.debug(`Image for ${container.name} has checksum mismatch.`);
          const freshImage = await container.getImage(true);
          setImage(imagePrefix + freshImage.encoded);
        } else {
          log.debug(`Image for ${container.name} is up-to-date.`);
        }
      } else {
        log.debug(`Image-Cache-Miss for ${container.name}.`);
        const freshImage = await container.getImage();
        setImage(imagePrefix + freshImage.encoded);
      }
      log.debug(`loadImage: my job here is done for ${container.name}`);
    };
    loadImage()
      .then(() => log.info(`Loaded image for container ${container.name}`))
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

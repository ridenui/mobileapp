import React, { useEffect, useState } from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { ButtonSizes, ButtonVariants } from '@atoms/Button/Button';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { clearStorageCache, getCacheKeys } from '@helpers/Storage';
import * as S from '../Settings.styled';

export function StorageCache() {
  const [hasCachedData, setHasCachedData] = useState(true);
  const [cachedKeyCount, setCachedKeyCount] = useState(0);

  useEffect(() => {
    getCacheKeys().then((keys) => {
      setHasCachedData(keys.length !== 0);
      setCachedKeyCount(keys.length);
    });
  }, []);

  const handleButtonPress = () => {
    clearStorageCache()
      .then(() => {
        setHasCachedData(false);
        setHasCachedData(0);
        ReactNativeHapticFeedback.trigger('notificationSuccess');
      })
      .catch(() => {
        ReactNativeHapticFeedback.trigger('notificationError');
      });
  };

  return (
    <S.SettingsBox>
      <S.BoxHeader variant={TypographyVariants.H3}>Cache</S.BoxHeader>
      <Typography variant={TypographyVariants.Small}>
        Riden stores some data on your device to make the app faster. This data includes container icons, server info
        and more. If you see something outdated, reinstalled your server or simply have some weird behaviour in the app,
        you can clear the cache here.
      </Typography>
      <S.Actions>
        <S.ActionButton
          size={ButtonSizes.SMALL}
          variant={ButtonVariants.GREEN}
          onPress={handleButtonPress}
          disabled={!hasCachedData}
        >
          {hasCachedData ? `Clear ${cachedKeyCount} cache items` : 'Nothing cached right now'}
        </S.ActionButton>
      </S.Actions>
    </S.SettingsBox>
  );
}

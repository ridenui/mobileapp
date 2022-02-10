import React from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { ButtonSizes, ButtonVariants } from '@atoms/Button/Button';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { writeToStorage } from '@helpers/Storage';
import { ConfigValues } from '../../../constants';
import { useSettings } from '../../../contexts/Settings.context';
import { Themes } from '../../../types/Generic';
import * as S from '../Settings.styled';

export function Theme() {
  const {
    reloadSettings,
    generic: { themeName },
  } = useSettings();

  const toggleTheme = () => {
    const newTheme = themeName === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
    writeToStorage(ConfigValues.theme, newTheme).then(() => {
      ReactNativeHapticFeedback.trigger('notificationSuccess');
      reloadSettings();
    });
  };

  return (
    <S.SettingsBox>
      <S.BoxHeader variant={TypographyVariants.H3}>Theme</S.BoxHeader>
      <Typography variant={TypographyVariants.Small}>
        Riden features a Light and a Dark Mode, while we default to the Dark Mode you can still use the Light Mode, but
        be aware that the App looks much better in Dark Mode :)
      </Typography>
      <S.Actions>
        <S.ActionButton size={ButtonSizes.SMALL} variant={ButtonVariants.GREEN} onPress={toggleTheme}>
          Switch to {themeName === Themes.DARK ? 'Light' : 'Dark'}
        </S.ActionButton>
      </S.Actions>
    </S.SettingsBox>
  );
}

import React, { useState } from 'react';
import RNFS from 'react-native-fs';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { ButtonSizes, ButtonVariants } from '@atoms/Button/Button';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { getTodaysLogName, log } from '@helpers/Logger';
import Clipboard from '@react-native-clipboard/clipboard';
import * as S from '../Settings.styled';

export function Log() {
  const [showSuccessCopiedText, setShowSuccessCopiedText] = useState(false);
  const [showSuccessDeleteText, setShowSuccessDeleteText] = useState(false);

  const copyLog = () => {
    RNFS.readFile(`${RNFS.DocumentDirectoryPath}/${getTodaysLogName()}`)
      .then((file) => {
        Clipboard.setString(file);
        ReactNativeHapticFeedback.trigger('notificationSuccess');
        setShowSuccessCopiedText(true);
        setTimeout(() => {
          setShowSuccessCopiedText(false);
        }, 5000);
      })
      .catch(() => {
        ReactNativeHapticFeedback.trigger('notificationError');
        log.error('Unable to read logfile.');
      });
  };

  const deleteRecentLogs = () => {
    RNFS.readDir(RNFS.DocumentDirectoryPath).then(async (files) => {
      for (const file of files) {
        log.debug(`Checking file ${file.name}`);
        if (!file.name.includes(getTodaysLogName())) {
          log.debug(`${file.name} is not todays log`);
          log.debug(`Unlinking ${file.name}`);
          await RNFS.unlink(`${RNFS.DocumentDirectoryPath}/${file.name}`);
        }
      }
      log.info('Cleared all logs.');
      ReactNativeHapticFeedback.trigger('notificationSuccess');
      setShowSuccessDeleteText(true);
      setTimeout(() => {
        setShowSuccessDeleteText(false);
      }, 5000);
    });
  };

  return (
    <S.SettingsBox>
      <S.BoxHeader variant={TypographyVariants.H3}>Logs</S.BoxHeader>
      <Typography variant={TypographyVariants.Small}>
        RidenUI creates logs which can help us to debug issues. If you have a problem with the App, please file an issue
        on GitHub and copy the logs. These logs should never contain any sensitive information, but we ask you to double
        check before submitting
      </Typography>
      <S.Actions>
        <S.ActionButton variant={ButtonVariants.GREEN} size={ButtonSizes.SMALL} onPress={copyLog}>
          {showSuccessCopiedText ? 'Todays log copied' : 'Copy todays log'}
        </S.ActionButton>
        <S.ActionButton onPress={deleteRecentLogs} variant={ButtonVariants.PRIMARY} size={ButtonSizes.SMALL}>
          {showSuccessDeleteText ? 'Old logs cleared' : 'Clear old logs'}
        </S.ActionButton>
      </S.Actions>
    </S.SettingsBox>
  );
}

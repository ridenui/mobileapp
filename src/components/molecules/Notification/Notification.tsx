import React from 'react';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { ButtonSizes, ButtonVariants } from '@atoms/Button/Button';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { log } from '@helpers/Logger';
import type { RichNotification } from '@ridenui/unraid/dist/modules/unraid/extensions';
import { format } from 'date-fns';
import { useServer } from '../../../contexts/Server.context';
import { useUnraid } from '../../../contexts/Unraid.context';
import * as S from './Notification.styled';

export interface NotificationProps {
  notification: RichNotification;
}

export function Notification({ notification }: NotificationProps): JSX.Element {
  const { reloadProperty } = useServer();
  const { instance } = useUnraid();
  const { description, event, importance, isArchived, subject, created } = notification;

  const deleteNotification = () => {
    if (!instance) {
      log.error('Unable to delete notification. No instance.');

      return;
    }
    instance.unraid
      .deleteNotification(notification.fileName, notification.isArchived)
      .then(() => {
        ReactNativeHapticFeedback.trigger('notificationSuccess');
        reloadProperty('notifications');
      })
      .catch((e) => {
        ReactNativeHapticFeedback.trigger('notificationError');
        log.error('Unable to delete Notification');
        log.error(e);
      });
  };

  const toggleArchive = () => {
    if (!instance) {
      log.error('Unable to toggle archive notification. No instance.');

      return;
    }
    instance.unraid
      .toggleNotificationArchiveState(notification.fileName, notification.isArchived)
      .then(() => {
        ReactNativeHapticFeedback.trigger('notificationSuccess');
        reloadProperty('notifications');
      })
      .catch((e) => {
        ReactNativeHapticFeedback.trigger('notificationError');
        log.error('Unable to toggle archive state');
        log.error(e);
      });
  };

  return (
    <S.Notification importance={importance} isArchived={isArchived}>
      <S.Header variant={TypographyVariants.H5}>{subject}</S.Header>
      <S.EventInfo variant={TypographyVariants.Small}>
        {event} sent on {format(created, 'yyyy-MM-dd HH:mm:ss')}
      </S.EventInfo>
      <Typography variant={TypographyVariants.Paragraph}>{description}</Typography>
      <S.Actions>
        <S.ActionButton size={ButtonSizes.SMALL} variant={ButtonVariants.FLAT} onPress={toggleArchive}>
          {isArchived ? 'Unarchive' : 'Archive'}
        </S.ActionButton>
        <S.ActionButton size={ButtonSizes.SMALL} onPress={deleteNotification}>
          Delete
        </S.ActionButton>
      </S.Actions>
    </S.Notification>
  );
}

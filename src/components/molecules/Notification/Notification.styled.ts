import { Box } from '@atoms/Box/Box';
import { Button } from '@atoms/Button/Button';
import { Typography } from '@atoms/Typography/Typography';
import type { NotificationProps } from '@molecules/Notification/Notification';
import styled from 'styled-components/native';

export type NotificationStyled = {
  importance: NotificationProps['notification']['importance'];
  isArchived: boolean;
};

const getBackgroundAndBorder = ({ importance, isArchived }: NotificationStyled) => {
  if (isArchived) {
    return {
      background: 'rgba(120, 120, 120, 0.2)',
      border: '1px solid rgb(120, 120, 120)',
    };
  }

  if (importance === 'alert') {
    return {
      background: 'rgba(255, 0, 0, 0.2)',
      border: '1px solid rgb(255, 0, 0)',
    };
  }

  if (importance === 'warning') {
    return {
      background: 'rgba(255, 200, 0, 0.2)',
      border: '1px solid rgb(255, 200, 0)',
    };
  }

  return {};
};

export const Notification = styled(Box)`
  width: 95%;
  margin: 2.5%;

  ${getBackgroundAndBorder}
`;

export const EventInfo = styled(Typography)`
  margin-bottom: 8px;
`;

export const Header = styled(Typography)`
  margin-bottom: 4px;
`;

export const Actions = styled.View`
  display: flex;
  margin-top: 8px;
  flex-direction: row;
`;

export const ActionButton = styled(Button)`
  flex: 1;
  margin: 0 4px;
`;

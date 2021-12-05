import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';
import { Button } from '@atoms/Button/Button';

export const Background = styled(LinearGradient)`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingIcon = styled(LottieView)`
  height: 100px;
`;

export const ResetButton = styled(Button)`
  margin-top: 16px;
`;

export const Status = styled.View`
  position: absolute;
  bottom: 100px;
`;

import LinearGradient from 'react-native-linear-gradient';
import { Button } from '@atoms/Button/Button';
import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

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

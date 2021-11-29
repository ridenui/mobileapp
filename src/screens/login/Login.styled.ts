import styled from 'styled-components/native';
import { Input } from '@atoms/Input/Input';
import { Typography } from '@atoms/Typography/Typography';

export const Container = styled.View`
  background: ${({ theme }) => theme['600']};
  flex: 1;
  flex-direction: column;
`;

export const Box = styled.View`
  width: 95%;
  margin: 0 2.5%;
  background: ${({ theme }) => theme['500']};
  padding: 16px 16px;
  border-radius: 8px;
`;

export const Form = styled.View`
  justify-content: space-between;
  height: 220px;
  margin-top: 16px;
`;

export const HostnamePortContainer = styled.View`
  flex-direction: row;
`;

export const HostnameInput = styled(Input)`
  flex-grow: 1;
  margin-right: 16px;
`;

export const Footer = styled.TouchableOpacity`
  position: absolute;
  bottom: 24px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`;

export const AutoDiscoverResults = styled.FlatList`
  margin-top: 16px;
  width: 100%;
  max-height: 104px;
`;

export const MoreDevicesHint = styled.View`
  align-self: flex-end;
  flex-direction: row;
  align-items: center;
  margin-right: 16px;
  margin-top: 8px;
`;

import React, { useEffect, useState } from 'react';
import * as S from './Login.styled';
import { GradientHeader } from '@atoms/GradientHeader/GradientHeader';
import { Input } from '@atoms/Input/Input';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { Button } from '@atoms/Button/Button';
import { beginAutoDiscover, stopDiscovering, ValidValidatedInstance } from './AutoDiscover';
import { openLink } from '@helpers/Linker';
import { AutoDiscoverCard } from '@molecules/AutoDiscoverCard/AutoDiscoverCard';
import { MoreDevicesHint } from './Login.styled';
import { ChevronsRight } from 'react-native-feather';
import { useTheme } from 'styled-components/native';

export function LoginScreen() {
  const [devices, setDiscoveredDevices] = useState<ValidValidatedInstance[]>([]);
  const theme = useTheme();

  useEffect(() => {
    beginAutoDiscover(service => {
      setDiscoveredDevices(oldDevices => [...oldDevices, service]);
    });

    return () => stopDiscovering();
  }, []);

  return (
    <S.Container>
      <GradientHeader />
      <S.SafeAreaContainer>
        <S.Box>
          <Typography variant={TypographyVariants.H1}>Hey!</Typography>
          <Typography variant={TypographyVariants.Paragraph}>Please set up your server below</Typography>
          <S.Form>
            <S.HostnamePortContainer>
              <S.HostnameInput>Hostname</S.HostnameInput>
              <Input>Port</Input>
            </S.HostnamePortContainer>
            <Input>Username</Input>
            <Input>Password</Input>
            <Button>Connect</Button>
          </S.Form>
        </S.Box>
        {devices.length !== 0 && (
          <>
            <S.AutoDiscoverResults
              horizontal={true}
              overScrollMode={'always'}
              data={devices}
              pagingEnabled={true}
              renderItem={({ item }) => <AutoDiscoverCard device={item as ValidValidatedInstance} />}
            />
            {devices.length > 1 && (
              <MoreDevicesHint>
                <Typography variant={TypographyVariants.Paragraph}>Scroll to see more</Typography>
                <ChevronsRight width={20} stroke={theme.text} />
              </MoreDevicesHint>
            )}
          </>
        )}
        <S.Footer onPress={() => openLink('https://github.com/ridenui')}>
          <Typography variant={TypographyVariants.Overline}>RIDEN UI</Typography>
        </S.Footer>
      </S.SafeAreaContainer>
    </S.Container>
  );
}

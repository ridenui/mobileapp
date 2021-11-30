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
import { useUnraid } from '../../contexts/Unraid.context';
import { Formik } from 'formik';
import { Keyboard } from 'react-native';
import { Credentials } from '../../types/Generic';

type CredentialsWithPortString = {
  host: string;
  port: string;
  username: string;
  password: string;
};

export function LoginScreen() {
  const [devices, setDiscoveredDevices] = useState<ValidValidatedInstance[]>([]);
  const theme = useTheme();
  const { setCredentials } = useUnraid();

  useEffect(() => {
    beginAutoDiscover(service => {
      setDiscoveredDevices(oldDevices => [...oldDevices, service]);
    });

    return () => stopDiscovering();
  }, []);

  const initialFormContents: CredentialsWithPortString = { host: '', port: '', password: '', username: '' };
  const onSubmit = (values: CredentialsWithPortString) => {
    Keyboard.dismiss();
    setCredentials({
      ...values,
      port: parseInt(values.port, 10),
    });
  };

  return (
    <S.Container>
      <GradientHeader />
      <Formik initialValues={initialFormContents} onSubmit={onSubmit}>
        {({ handleChange, values, setFieldValue }) => (
          <S.SafeAreaContainer>
            <S.Box>
              <Typography variant={TypographyVariants.H1}>Hey!</Typography>
              <Typography variant={TypographyVariants.Paragraph}>Please set up your server below</Typography>
              <S.Form>
                <S.HostnamePortContainer>
                  <S.HostnameInput autoCapitalize={'none'} value={values.host} onChangeText={handleChange('host')}>
                    Hostname
                  </S.HostnameInput>
                  <S.PortInput
                    value={values.port.toString()}
                    autoCapitalize={'none'}
                    onChangeText={handleChange('port')}
                    maxLength={5}
                    keyboardType={'numeric'}>
                    Port
                  </S.PortInput>
                </S.HostnamePortContainer>
                <Input value={values.username} autoCapitalize={'none'} onChangeText={handleChange('username')}>
                  Username
                </Input>
                <Input
                  value={values.password}
                  autoCapitalize={'none'}
                  isSecure={true}
                  onChangeText={handleChange('password')}>
                  Password
                </Input>
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
                  renderItem={({ item }) => (
                    <AutoDiscoverCard
                      device={item as ValidValidatedInstance}
                      onPress={device => {
                        setFieldValue('host', device.ssh.hostname);
                        setFieldValue('port', device.ssh.port.toString());
                      }}
                    />
                  )}
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
        )}
      </Formik>
    </S.Container>
  );
}

import React, { useEffect, useState } from 'react';
import * as S from './Login.styled';
import { GradientHeader } from '@atoms/GradientHeader/GradientHeader';
import { Input } from '@atoms/Input/Input';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { Button } from '@atoms/Button/Button';
import { validateInstance, ValidValidatedInstance } from './AutoDiscover';
import { openLink } from '@helpers/Linker';
import { AutoDiscoverCard } from '@molecules/AutoDiscoverCard/AutoDiscoverCard';
import { MoreDevicesHint } from './Login.styled';
import { ChevronsRight } from 'react-native-feather';
import { useTheme } from 'styled-components/native';
import { useUnraid } from '../../contexts/Unraid.context';
import { useFormik } from 'formik';
import { Keyboard } from 'react-native';
import { CredentialsSchema } from '../../validators/Credentials.validation';
import Zeroconf from 'react-native-zeroconf';

export function LoginScreen() {
  const [devices, setDiscoveredDevices] = useState<ValidValidatedInstance[]>([]);
  const [isInvalidForm, setIsInvalidForm] = useState(true);
  const theme = useTheme();
  const { setCredentials } = useUnraid();
  const { handleSubmit, handleChange, errors, setFieldValue, values } = useFormik({
    initialValues: {
      host: '',
      port: '',
      password: '',
      username: '',
    },
    validateOnBlur: true,
    validateOnMount: true,
    validationSchema: CredentialsSchema,
    onSubmit: async v => {
      Keyboard.dismiss();
      console.log('Submitting Login Form.');
      await setCredentials({
        ...v,
        port: parseInt(v.port, 10),
      });
    },
  });

  useEffect(() => {
    setIsInvalidForm(!!errors.port || !!errors.password || !!errors.host || !!errors.username);
  }, [errors]);

  useEffect(() => {
    const zeroconf = new Zeroconf();
    zeroconf.scan('ssh', 'tcp');
    zeroconf.on('resolved', async service => {
      console.log('Found new Service ' + service.name);
      const validatedInstance = await validateInstance(service);
      if (validatedInstance.isValid) {
        setDiscoveredDevices(oldDevices => [...oldDevices, validatedInstance]);
      }
    });

    return () => {
      setDiscoveredDevices([]);
      zeroconf.removeDeviceListeners();
    };
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
              <S.HostnameInput
                autoCorrect={false}
                isInvalid={!!errors.host}
                autoCapitalize={'none'}
                value={values.host}
                onChangeText={handleChange('host')}
              >
                Hostname
              </S.HostnameInput>
              <S.PortInput
                autoCorrect={false}
                isInvalid={!!errors.port}
                value={values.port.toString()}
                autoCapitalize={'none'}
                onChangeText={handleChange('port')}
                maxLength={5}
                keyboardType={'numeric'}
              >
                Port
              </S.PortInput>
            </S.HostnamePortContainer>
            <Input
              autoCorrect={false}
              isInvalid={!!errors.username}
              value={values.username}
              autoCapitalize={'none'}
              onChangeText={handleChange('username')}
            >
              Username
            </Input>
            <Input
              autoCorrect={false}
              isInvalid={!!errors.password}
              value={values.password}
              autoCapitalize={'none'}
              isSecure={true}
              onChangeText={handleChange('password')}
            >
              Password
            </Input>
            <Button disabled={isInvalidForm} onPress={() => handleSubmit()}>
              {isInvalidForm ? 'Please fill out the red fields' : 'Connect'}
            </Button>
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
    </S.Container>
  );
}

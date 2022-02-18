import React, { useEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import { ChevronsRight } from 'react-native-feather';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Zeroconf from 'react-native-zeroconf';
import { Button } from '@atoms/Button/Button';
import { GradientHeader } from '@atoms/GradientHeader/GradientHeader';
import { Input } from '@atoms/Input/Input';
import { Typography, TypographyVariants } from '@atoms/Typography/Typography';
import { openLink } from '@helpers/Linker';
import { log } from '@helpers/Logger';
import { AutoDiscoverCard } from '@molecules/AutoDiscoverCard/AutoDiscoverCard';
import { useFormik } from 'formik';
import { useTheme } from 'styled-components/native';
import { useUnraid } from '../../contexts/Unraid.context';
import { CredentialsSchema } from '../../validators/Credentials.validation';
import type { ValidValidatedInstance } from './AutoDiscover';
import { validateInstance } from './AutoDiscover';
import * as S from './Login.styled';
import { MoreDevicesHint } from './Login.styled';

export function LoginScreen() {
  const [devices, setDiscoveredDevices] = useState<ValidValidatedInstance[]>([]);
  const [isInvalidForm, setIsInvalidForm] = useState(true);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const theme = useTheme();
  const { setCredentials, checkCredentials } = useUnraid();
  const { handleSubmit, handleChange, errors, setFieldValue, values, isSubmitting } = useFormik({
    initialValues: {
      host: '',
      port: '',
      password: '',
      username: '',
    },
    validateOnBlur: true,
    validateOnMount: true,
    validateOnChange: true,
    validationSchema: CredentialsSchema,
    onSubmit: async (v, { setErrors }) => {
      Keyboard.dismiss();
      log.info('Validating credentials');

      const creds = {
        ...v,
        port: Number.parseInt(v.port, 10),
      };

      try {
        await checkCredentials(creds);
        await setCredentials({
          ...v,
          port: parseInt(v.port, 10),
        });
        setConnectionError(null);
        ReactNativeHapticFeedback.trigger('notificationSuccess');
      } catch (error) {
        const { message = 'Unknown error' } = error as { message: string };
        log.error(`Unable to login ${message}`);
        ReactNativeHapticFeedback.trigger('notificationError');
        setConnectionError(message);
        setErrors({
          host: 'Login failed',
          port: 'Login failed',
          password: 'Login failed',
          username: 'Login failed',
        });
      }
    },
  });

  useEffect(() => {
    setIsInvalidForm(!!errors.port || !!errors.password || !!errors.host || !!errors.username);
  }, [errors]);

  useEffect(() => {
    const zeroconf = new Zeroconf();
    zeroconf.scan('ssh', 'tcp');
    zeroconf.on('resolved', async (service) => {
      log.debug(`Found new Service ${service.name}`);
      const validatedInstance = await validateInstance(service);
      if (validatedInstance.isValid) {
        setDiscoveredDevices((oldDevices) => [...oldDevices, validatedInstance]);
      }
    });

    return () => {
      setDiscoveredDevices([]);
      zeroconf.removeDeviceListeners();
    };
  }, []);

  const getButtonText = () => {
    if (isSubmitting) {
      return 'Connecting...';
    }
    if (isInvalidForm) {
      return 'Please check the red fields.';
    }

    return 'Connect';
  };

  return (
    <S.Container>
      <GradientHeader />
      <S.SafeAreaContainer>
        <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={75}>
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
              <Button disabled={isInvalidForm || isSubmitting} onPress={() => handleSubmit()}>
                {getButtonText()}
              </Button>
              {connectionError && <S.ErrorMessage variant={TypographyVariants.Small}>{connectionError}</S.ErrorMessage>}
            </S.Form>
          </S.Box>
        </KeyboardAvoidingView>
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
                  onPress={(device) => {
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

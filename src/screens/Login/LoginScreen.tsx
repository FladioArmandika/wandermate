import React from 'react';

import { ScreenProps } from '@app/routes';
import LoginView from './LoginView';

function LoginScreen({ navigation }: ScreenProps<'LoginScreen'>) {
  const onContinue = () => navigation.navigate('HomeTab');

  return <LoginView onContinue={onContinue} />;
}

export default LoginScreen;

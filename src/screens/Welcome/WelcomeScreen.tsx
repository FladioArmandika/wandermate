import React from 'react';

import { ScreenProps } from '@app/routes';
import WelcomeView from './WelcomeView';

function WelcomeScreen({ navigation }: ScreenProps<'WelcomeScreen'>) {
  const onContinue = () => navigation.navigate('LoginScreen');
  return <WelcomeView onContinue={onContinue} />;
}

export default WelcomeScreen;

import React from 'react';

import { Button, Flex, Text } from '@app/components/base';
import { spacing } from '@app/themes';
import { SafeAreaView } from 'react-native';

type Props = {
  onContinue: () => void;
};

const LoginView = ({ onContinue }: Props) => {
  return (
    <SafeAreaView>
      <Flex justifyContent="center" alignItems="center" height={'100%'}>
        <Text variant="heading1" bold>
          Login
        </Text>
        <Flex position="absolute" bottom={spacing.xxxl}>
          <Button title="Continue with Google" onPress={onContinue} />
        </Flex>
      </Flex>
    </SafeAreaView>
  );
};

export default LoginView;

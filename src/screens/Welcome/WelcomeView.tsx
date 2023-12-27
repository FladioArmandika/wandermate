import React from 'react';

import {Button, Flex, Text} from '@app/components/base';
import {spacing} from '@app/themes';

type Props = {
  onContinue: () => void;
};

const WelcomeView = ({onContinue}: Props) => {
  return (
    <Flex justifyContent="center" alignItems="center" flex={1}>
      <Text variant="heading1" bold>
        Wandermate
      </Text>
      <Flex position="absolute" bottom={spacing.xxxl}>
        <Button title="Continue" onPress={onContinue} />
      </Flex>
    </Flex>
  );
};

export default WelcomeView;

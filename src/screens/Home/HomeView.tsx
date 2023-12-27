import { SafeAreaView, View } from 'react-native';
import React from 'react';

import { Button, Text } from '@app/components/base';

type Props = { onCreatePlan: () => void };

const HomeView = ({ onCreatePlan }: Props) => {
  return (
    <SafeAreaView>
      <Text>Create plan with your friends</Text>
      <Button title="Create Plan" onPress={onCreatePlan} />
    </SafeAreaView>
  );
};

export default HomeView;

import { View, Text } from 'react-native';
import React from 'react';
import HomeView from './HomeView';
import { ScreenProps } from '@app/routes';

type Props = ScreenProps<'HomeTab'>;

const HomeScreen = ({ navigation }: Props) => {
  const onCreatePlan = () => navigation.navigate('CreatePlanScreen');

  return <HomeView onCreatePlan={onCreatePlan} />;
};

export default HomeScreen;

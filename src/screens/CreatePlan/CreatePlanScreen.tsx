import React from 'react';

import { ScreenProps } from '@app/routes';
import CreatePlanView from './CreatePlanView';

type Props = ScreenProps<'CreatePlanScreen'>;

const CreatePlanScreen = ({ navigation }: Props) => {
  const onNext = () => navigation.navigate('PlanInviteFriendsScreen');
  return <CreatePlanView onNext={onNext} />;
};

export default CreatePlanScreen;

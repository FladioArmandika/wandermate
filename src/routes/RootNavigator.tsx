import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  CreatePlanScreen,
  LoginScreen,
  PlanInviteFriendsScreen,
  WelcomeScreen,
} from '@app/screens';
import { RootStackParams, Screens } from './routes';
import HomeTabNavigator from './HomeTabNavigator';

type Props = {};

const Stack = createNativeStackNavigator<RootStackParams>();

const noHeaderOptions = { headerShown: false };

const RootNavigator = (props: Props) => {
  return (
    <Stack.Navigator initialRouteName={Screens.Login}>
      {/* <Stack.Screen
        name={Screens.Welcome}
        component={WelcomeScreen}
        options={noHeaderOptions}
      /> */}
      <Stack.Screen
        name={Screens.Login}
        component={LoginScreen}
        options={noHeaderOptions}
      />
      <Stack.Screen
        name={Screens.HomeTab}
        component={HomeTabNavigator}
        options={noHeaderOptions}
      />

      <Stack.Screen
        name={Screens.CreatePlan}
        component={CreatePlanScreen}
        options={noHeaderOptions}
      />
      <Stack.Screen
        name={Screens.PlanInviteFriends}
        component={PlanInviteFriendsScreen}
        options={noHeaderOptions}
      />
      {/* <Stack.Group
        screenOptions={{presentation: 'formSheet', headerShown: false}}>
        <Stack.Screen name={Screens.CheckIn} component={CheckInScreen} />
        <Stack.Screen
          name={Screens.QuickPreviewClass}
          component={QuickPreviewClassScreen}
        />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

export default RootNavigator;

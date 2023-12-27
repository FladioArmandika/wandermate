import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { HomeScreen, PlanScreen } from '@app/screens';
import { colors, spacing } from '@app/themes';
import { Text, Icon } from '@app/components/base';
import { Icons } from '@app/assets/icons';
import { Screens } from './routes';

type Props = {};

const Tab = createBottomTabNavigator();

const getOptions = (
  label: string,
  icon: Icons,
): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarLabel: ({ focused }) => {
    return (
      <Text variant="label" color={focused ? 'primary' : 'greyLight'} bold>
        {label}
      </Text>
    );
  },
  tabBarIcon: ({ focused }) => {
    return (
      <Icon
        icon={icon}
        color={focused ? colors.primary : colors.greyLight}
        height={18}
      />
    );
  },
});

const HomeTabNavigator = (props: Props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 0,
          paddingTop: spacing.l,
          height: 100,
        },
      }}>
      <Tab.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={getOptions('Home', 'home')}
      />
      <Tab.Screen
        name={Screens.Plan}
        component={PlanScreen}
        options={getOptions('Plan', 'plan')}
      />
      {/* <Tab.Screen
        name={Screens.Workout}
        component={WorkoutScreen}
        options={getOptions('Workout', 'dumbell')}
      />
      <Tab.Screen
        name={Screens.Profile}
        component={WorkoutScreen}
        options={getOptions('Profile', 'user')}
      /> */}
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;

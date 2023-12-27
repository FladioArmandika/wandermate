import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum Screens {
  Welcome = 'WelcomeScreen',
  Login = 'LoginScreen',
  Property = 'PropertyScreen',

  HomeTab = 'HomeTab',
  Home = 'HomeScreen',
  Plan = 'PlanScreen',
  Profile = 'ProfileScreen',

  CreatePlan = 'CreatePlanScreen',
  PlanInviteFriends = 'PlanInviteFriendsScreen',
}

export type RootStackParams = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  HomeTab: undefined;
  CheckInScreen: undefined;

  CreatePlanScreen: undefined;
  PlanInviteFriendsScreen: undefined;
};

export type HomeTabParams = {
  HomeScreen: undefined;
  ExploreScreen: undefined;
  WorkoutScreen: undefined;
  ProfileScreen: undefined;
};

export type ScreenProps<T extends keyof RootStackParams> =
  NativeStackScreenProps<RootStackParams, T>;

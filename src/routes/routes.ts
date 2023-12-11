import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {ProgramClass, WorkoutProgram} from '@app/types';

export enum Screens {
  Welcome = 'WelcomeScreen',
  Login = 'LoginScreen',
  Property = 'PropertyScreen',

  HomeTab = 'HomeTab',
  Home = 'HomeScreen',
  Workout = 'WorkoutScreen',
  Explore = 'ExploreScreen',
  Profile = 'ProfileScreen',

  CheckIn = 'CheckInScreen',
  QuickPreviewClass = 'QuickPreviewClassScreen',
  WorkoutDetail = 'WorkoutDetailScreen',
}

export type RootStackParams = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  HomeTab: undefined;
  CheckInScreen: undefined;
  WorkoutDetailScreen: {
    workoutProgram: WorkoutProgram;
  };
  QuickPreviewClassScreen: {
    programClass: ProgramClass;
  };
};

export type HomeTabParams = {
  HomeScreen: undefined;
  ExploreScreen: undefined;
  WorkoutScreen: undefined;
  ProfileScreen: undefined;
};

export type ScreenProps<T extends keyof RootStackParams> =
  NativeStackScreenProps<RootStackParams, T>;

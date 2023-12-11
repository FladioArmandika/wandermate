import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { colors } from './colors';
import { spacing } from './spacing';
import { border } from './border';

type ButtonStyle = {
  container: StyleProp<ViewStyle>;
  label: StyleProp<TextStyle>;
};

export type ButtonTheme = {
  [variant: string]: ButtonStyle;
};

export const buttonThemes: ButtonTheme = {
  primary: {
    container: {
      backgroundColor: colors.primary,
      borderRadius: border.radius.m,
      paddingHorizontal: spacing.xl,
      paddingVertical: spacing.xl,
    },
    label: {
      color: colors.black,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  },
};

export type ButtonVariants = 'primary';

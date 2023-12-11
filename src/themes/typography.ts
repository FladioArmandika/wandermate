import { TextStyle } from 'react-native';

const fonts = {};

type TypographyTheme = {
  [variant: string]: TextStyle;
};

const font = {
  base: { fontFamily: 'CeraPro-Regular' },
};

export const typography: TypographyTheme = {
  heading1: {
    ...font.base,
    fontSize: 36,
  },
  heading2: {
    ...font.base,
    fontSize: 24,
  },
  heading3: {
    ...font.base,
    fontSize: 18,
  },
  heading4: {
    ...font.base,
    fontSize: 18,
  },
  body: {
    ...font.base,
    fontSize: 16,
  },
  label: {
    ...font.base,
    fontSize: 14,
  },
};

export type TypographyVariants =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'body'
  | 'label';

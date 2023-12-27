import { Text as RNText, TextProps } from 'react-native';
import React, { ReactNode } from 'react';

import styles from './Text.styles';
import { colors, TypographyVariants, typography } from '@app/themes';

type Props = TextProps & {
  children: ReactNode;
  align?: 'left' | 'right' | 'center' | 'justify';
  variant?: TypographyVariants;
  bold?: boolean;
  color?: keyof typeof colors;
};

const Text = ({
  variant = 'body',
  bold,
  align = 'left',
  style,
  color = 'black',
  ...props
}: Props) => {
  return (
    <RNText
      {...props}
      style={[
        bold && styles.bold,
        typography[variant],
        { color: colors[color], textAlign: align },
        style,
      ]}
    />
  );
};

export default Text;

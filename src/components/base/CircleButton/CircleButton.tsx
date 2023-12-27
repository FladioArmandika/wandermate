import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React, { memo } from 'react';
import { colors, spacing } from '@app/themes';

type Props = TouchableOpacityProps & {
  color?: keyof typeof colors;
};

const CircleButton = memo(({ color = 'primary', ...props }: Props) => {
  return (
    <TouchableOpacity
      {...props}
      style={[
        props.style,
        {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors[color],
          borderRadius: 500,
          padding: spacing.l,
        },
      ]}
    />
  );
});

export default CircleButton;

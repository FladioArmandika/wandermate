import React, { memo } from 'react';
import { TouchableOpacity, ButtonProps } from 'react-native';

import { ButtonVariants, buttonThemes } from '@app/themes';
import Text from '../Text/Text';

type Props = ButtonProps & {
  variant?: ButtonVariants;
};

const Button = memo(({ variant = 'primary', title, ...props }: Props) => {
  return (
    <TouchableOpacity {...props} style={buttonThemes[variant].container}>
      <Text style={buttonThemes[variant].label}>{title}</Text>
    </TouchableOpacity>
  );
});

export default Button;

import { border, colors, spacing } from '@app/themes';
import React from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

type Props = TextInputProps & {
  variant?: 'primary';
  containerStyle?: ViewStyle;
};

const TextField = ({
  variant = 'primary',
  containerStyle,
  ...props
}: Props) => {
  return (
    <View style={[containerStyle, styles.container]}>
      <TextInput {...props} style={[props.style, styles.input]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xl,
    backgroundColor: colors.greyLight,
    borderRadius: border.radius.l,
  },
  input: {},
});

export default TextField;

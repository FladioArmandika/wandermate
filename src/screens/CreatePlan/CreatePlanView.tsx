import React from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

import { font, spacing } from '@app/themes';
import { CircleButton, Icon, Text } from '@app/components/base';

type Props = { onNext: () => void };

const CreatePlanView = ({ onNext }: Props) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>What you wanna call it?</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Name of the plan"
          multiline
        />
        <KeyboardAvoidingView>
          <CircleButton onPress={onNext}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: spacing.m,
              }}>
              <Icon icon="energy" />
              <Text bold>Next</Text>
            </View>
          </CircleButton>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: spacing.xxl,
    paddingHorizontal: spacing.xxl,
    gap: spacing.xxxl,
    height: '100%',
    position: 'relative',
  },
  textInput: {
    fontSize: 36,
    fontWeight: '600',
    fontFamily: font.base.fontFamily,
  },
});

export default CreatePlanView;

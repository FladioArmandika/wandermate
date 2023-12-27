import { View, SafeAreaView } from 'react-native';
import React from 'react';

import { Text, TextField } from '@app/components/base';
import { spacing } from '@app/themes';

type Props = {};

const PlanInviteFriendsView = (props: Props) => {
  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: spacing.xl }}>
        <Text bold variant="heading2" style={{ marginTop: spacing.xxl }}>
          Invite Friends
        </Text>
        <TextField
          placeholder="Search for friends"
          containerStyle={{ marginTop: spacing.xl }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PlanInviteFriendsView;

import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from '../../constants/theme';

export function TrophyLockIcon() {
  return (
    <View style={styles.TrophyLockIconRootPortico}>
      <View style={styles.TrophyLockIconShackleClipChassis}>
        <View style={styles.TrophyLockIconShackleArcSigil} />
      </View>
      <View style={styles.TrophyLockIconBodyFacet} />
    </View>
  );
}

const styles = StyleSheet.create({
  TrophyLockIconRootPortico: {
    alignItems: 'center',
  },
  TrophyLockIconShackleClipChassis: {
    alignItems: 'center',
    height: 11,
    overflow: 'hidden',
    width: 22,
  },

  TrophyLockIconShackleArcSigil: {
    borderColor: colors.gold,
    borderRadius: 11,
    borderWidth: 2.5,
    height: 22,
    width: 22,
  },

  TrophyLockIconBodyFacet: {
    borderColor: colors.gold,
    borderRadius: 5,
    borderWidth: 2.5,
    height: 20,
    marginTop: 2,
    width: 28,
  },
});

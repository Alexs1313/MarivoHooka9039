import React from 'react';
import {StyleSheet, View} from 'react-native';

import {colors} from '../../constants/theme';

export function TrophyLockIcon() {
  return (
    <View style={styles.TrophyLockIconRootAnchor}>
      <View style={styles.TrophyLockIconShackleClipReef}>
        <View style={styles.TrophyLockIconShackleArcCompass} />
      </View>
      <View style={styles.TrophyLockIconBodyHull} />
    </View>
  );
}

const styles = StyleSheet.create({
  TrophyLockIconRootAnchor: {
    alignItems: 'center',
  },
  TrophyLockIconShackleClipReef: {
    alignItems: 'center',
    height: 11,
    overflow: 'hidden',
    width: 22,
  },
  TrophyLockIconShackleArcCompass: {
    borderColor: colors.gold,
    borderRadius: 11,
    borderWidth: 2.5,
    height: 22,
    width: 22,
  },
  TrophyLockIconBodyHull: {
    borderColor: colors.gold,
    borderRadius: 5,
    borderWidth: 2.5,
    height: 20,
    marginTop: 2,
    width: 28,
  },
});

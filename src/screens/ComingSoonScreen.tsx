import React from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';

import {colors, fonts, fontSize, layout} from '../constants/theme';

type ComingSoonScreenProps = {
  label: string;
};

export function ComingSoonScreen({label}: ComingSoonScreenProps) {
  return (
    <ImageBackground
      source={require('../assets/marivo_app_background.png')}
      resizeMode="cover"
      style={styles.ComingSoonScreenRootTide}>
      <Text style={styles.ComingSoonScreenLabelLantern}>{label}</Text>
      <Text style={styles.ComingSoonScreenHintDriftwood}>Coming soon</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  ComingSoonScreenRootTide: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: layout.screenPaddingHorizontal,
  },
  ComingSoonScreenLabelLantern: {
    color: colors.gold,
    fontFamily: fonts.sansExtraBold,
    fontSize: fontSize.title,
    fontWeight: '800',
  },
  ComingSoonScreenHintDriftwood: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.body,
    marginTop: 8,
    opacity: 0.78,
  },
});

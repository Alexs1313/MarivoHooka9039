import React from 'react';
import {Image, Pressable, StyleSheet, Text} from 'react-native';
import type {ImageSourcePropType} from 'react-native';

import {colors, fonts, fontSize, layout, radius} from '../../constants/theme';

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
  variant?: 'gold' | 'green' | 'orange';
  icon?: ImageSourcePropType;
};

export function PrimaryButton({
  label,
  onPress,
  variant = 'gold',
  icon,
}: PrimaryButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.PrimaryButtonHull,
        variant === 'green' && styles.PrimaryButtonHullVoyageGreen,
        variant === 'orange' && styles.PrimaryButtonHullVoyageOrange,
        pressed && styles.PrimaryButtonPressedFathom,
      ]}>
      {icon && (
        <Image
          source={icon}
          resizeMode="contain"
          style={styles.PrimaryButtonIconCompass}
        />
      )}
      <Text
        style={[
          styles.PrimaryButtonLabelVoyage,
          (variant === 'green' || variant === 'orange') &&
            styles.PrimaryButtonLabelVoyageLight,
        ]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  PrimaryButtonHull: {
    alignItems: 'center',
    backgroundColor: colors.gold,
    borderRadius: radius.button,
    flexDirection: 'row',
    gap: 6,
    height: layout.buttonHeight,
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.28,
    shadowRadius: 0,
    elevation: 4,
    width: '100%',
  },
  PrimaryButtonHullVoyageGreen: {
    backgroundColor: colors.green,
  },
  PrimaryButtonHullVoyageOrange: {
    backgroundColor: colors.orange,
    height: undefined,
    paddingVertical: 10,
    shadowOpacity: 0.25,
  },
  PrimaryButtonPressedFathom: {
    opacity: 0.85,
  },
  PrimaryButtonIconCompass: {
    height: 15,
    width: 15,
  },
  PrimaryButtonLabelVoyage: {
    color: colors.goldDeep,
    fontFamily: fonts.sansBold,
    fontSize: fontSize.button,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  PrimaryButtonLabelVoyageLight: {
    color: colors.white,
  },
});

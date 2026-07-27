import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import type { ImageSourcePropType } from 'react-native';

import { colors, fonts, fontSize, layout, radius } from '../../constants/theme';

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
      style={({ pressed }) => [
        styles.PrimaryButtonFacet,
        variant === 'green' && styles.PrimaryButtonFacetPorticoGreen,
        variant === 'orange' && styles.PrimaryButtonFacetPorticoOrange,
        pressed && styles.PrimaryButtonPressedFiligree,
      ]}
    >
      {icon && (
        <Image
          source={icon}
          resizeMode="contain"
          style={styles.PrimaryButtonIconSigil}
        />
      )}
      <Text
        style={[
          styles.PrimaryButtonLabelPortico,
          (variant === 'green' || variant === 'orange') &&
            styles.PrimaryButtonLabelPorticoLight,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  PrimaryButtonFacet: {
    alignItems: 'center',
    backgroundColor: colors.gold,
    borderRadius: radius.button,
    flexDirection: 'row',
    gap: 6,
    height: layout.buttonHeight,
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.28,
    shadowRadius: 0,
    elevation: 4,
    width: '100%',
  },

  PrimaryButtonFacetPorticoGreen: {
    backgroundColor: colors.green,
  },
  PrimaryButtonFacetPorticoOrange: {
    backgroundColor: colors.orange,
    height: undefined,
    paddingVertical: 10,
    shadowOpacity: 0.25,
  },
  PrimaryButtonPressedFiligree: {
    opacity: 0.85,
  },
  PrimaryButtonIconSigil: {
    height: 15,
    width: 15,
  },

  PrimaryButtonLabelPortico: {
    color: colors.goldDeep,
    fontFamily: fonts.sansBold,
    fontSize: fontSize.button,
    fontWeight: '700',
    letterSpacing: 0.3,
  },

  PrimaryButtonLabelPorticoLight: {
    color: colors.white,
  },
});

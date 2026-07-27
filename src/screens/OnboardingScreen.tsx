import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { PaginationDots } from '../components/nav/PaginationDots';
import { colors, fonts, fontSize, layout, radius } from '../constants/theme';
import { ONBOARDING_SLIDES } from '../data/onboarding';
import { useNavigation } from '../navigation/NavigationContext';

export function OnboardingScreen() {
  const { onboardingStep, onboardingStepCount, advanceOnboarding } =
    useNavigation();
  const slide = ONBOARDING_SLIDES[onboardingStep];

  return (
    <ImageBackground
      source={require('../assets/hooka-marivo-guide-app-background.png')}
      resizeMode="cover"
      style={styles.OnboardingScreenRootChassis}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 150,
          paddingBottom: layout.screenPaddingBottom,
          paddingHorizontal: layout.screenPaddingHorizontal,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.OnboardingScreenHeroChassis}>
          <Image
            source={slide.hero}
            resizeMode="cover"
            style={styles.OnboardingScreenHeroImageArt}
          />
        </View>

        <View style={styles.OnboardingScreenDotsChassis}>
          <PaginationDots
            count={onboardingStepCount}
            activeIndex={onboardingStep}
          />
        </View>

        <View style={styles.OnboardingScreenBadgeRowFiligree}>
          <View style={styles.OnboardingScreenBadgePortico}>
            <Image
              source={slide.icon}
              resizeMode="contain"
              style={styles.OnboardingScreenBadgeIconFiligree}
            />
          </View>
          <Text style={styles.OnboardingScreenTitleFiligree}>
            {slide.title}
          </Text>
        </View>

        <Text style={styles.OnboardingScreenBodyFiligree}>{slide.body}</Text>

        <View style={styles.OnboardingScreenSpacerFiligree} />

        <PrimaryButton label={slide.buttonLabel} onPress={advanceOnboarding} />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  OnboardingScreenRootChassis: {
    flex: 1,
  },

  OnboardingScreenHeroChassis: {
    alignSelf: 'center',
    backgroundColor: colors.deepTeal,
    borderRadius: radius.card,
    height: layout.heroSize,
    overflow: 'hidden',
    width: layout.heroSize,
  },

  OnboardingScreenHeroImageArt: {
    height: '100%',
    width: '100%',
  },
  OnboardingScreenDotsChassis: {
    marginTop: 24,
  },

  OnboardingScreenBadgeRowFiligree: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    marginTop: 28,
  },

  OnboardingScreenBadgePortico: {
    alignItems: 'center',
    backgroundColor: colors.teal,
    borderRadius: radius.badge,
    height: 48,
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 4,
    width: 48,
  },
  OnboardingScreenBadgeIconFiligree: {
    height: 24,
    width: 24,
  },
  OnboardingScreenTitleFiligree: {
    color: colors.gold,
    flexShrink: 1,
    fontFamily: fonts.sansExtraBold,
    fontSize: fontSize.title,
    fontWeight: '800',
    lineHeight: 26,
  },

  OnboardingScreenBodyFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.body,
    lineHeight: 23,
    marginTop: 12,
    opacity: 0.85,
  },
  OnboardingScreenSpacerFiligree: {
    flex: 1,
  },
});

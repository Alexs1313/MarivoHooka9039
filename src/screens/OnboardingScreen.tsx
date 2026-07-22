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
      source={require('../assets/marivo_app_background.png')}
      resizeMode="cover"
      style={styles.OnboardingScreenRootTide}
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
        <View style={styles.OnboardingScreenHeroReef}>
          <Image
            source={slide.hero}
            resizeMode="cover"
            style={styles.OnboardingScreenHeroImageCurrent}
          />
        </View>

        <View style={styles.OnboardingScreenDotsHarbor}>
          <PaginationDots
            count={onboardingStepCount}
            activeIndex={onboardingStep}
          />
        </View>

        <View style={styles.OnboardingScreenBadgeRowFathom}>
          <View style={styles.OnboardingScreenBadgeAnchor}>
            <Image
              source={slide.icon}
              resizeMode="contain"
              style={styles.OnboardingScreenBadgeIconLantern}
            />
          </View>
          <Text style={styles.OnboardingScreenTitleLantern}>{slide.title}</Text>
        </View>

        <Text style={styles.OnboardingScreenBodyDriftwood}>{slide.body}</Text>

        <View style={styles.OnboardingScreenSpacerHorizon} />

        <PrimaryButton label={slide.buttonLabel} onPress={advanceOnboarding} />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  OnboardingScreenRootTide: {
    flex: 1,
  },
  OnboardingScreenHeroReef: {
    alignSelf: 'center',
    backgroundColor: colors.deepTeal,
    borderRadius: radius.card,
    height: layout.heroSize,
    overflow: 'hidden',
    width: layout.heroSize,
  },
  OnboardingScreenHeroImageCurrent: {
    height: '100%',
    width: '100%',
  },
  OnboardingScreenDotsHarbor: {
    marginTop: 24,
  },
  OnboardingScreenBadgeRowFathom: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    marginTop: 28,
  },
  OnboardingScreenBadgeAnchor: {
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
  OnboardingScreenBadgeIconLantern: {
    height: 24,
    width: 24,
  },
  OnboardingScreenTitleLantern: {
    color: colors.gold,
    flexShrink: 1,
    fontFamily: fonts.sansExtraBold,
    fontSize: fontSize.title,
    fontWeight: '800',
    lineHeight: 26,
  },
  OnboardingScreenBodyDriftwood: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.body,
    lineHeight: 23,
    marginTop: 12,
    opacity: 0.85,
  },
  OnboardingScreenSpacerHorizon: {
    flex: 1,
  },
});

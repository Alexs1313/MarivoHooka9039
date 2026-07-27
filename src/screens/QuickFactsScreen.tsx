import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text } from 'react-native';

import { FactCard } from '../components/facts/FactCard';
import { colors, fonts, fontSize } from '../constants/theme';

import { QUICK_FACTS } from '../data/facts';

export function QuickFactsScreen() {
  return (
    <ImageBackground
      source={require('../assets/hooka-marivo-guide-app-background.png')}
      resizeMode="cover"
      style={styles.QuickFactsScreenRootChassis}
    >
      <ScrollView
        contentContainerStyle={styles.QuickFactsScreenListChassis}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.QuickFactsScreenTitleFiligree}>Quick Facts</Text>

        {QUICK_FACTS.map((fact, index) => (
          <FactCard
            key={fact.id}
            fact={fact}
            variant={index % 2 === 0 ? 'green' : 'orange'}
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  QuickFactsScreenRootChassis: {
    flex: 1,
  },
  QuickFactsScreenTitleFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansExtraBold,
    fontSize: fontSize.title + 4,
    fontWeight: '800',
    lineHeight: 36,
  },

  QuickFactsScreenListChassis: {
    gap: 14,
    paddingBottom: 24,
    paddingHorizontal: 20,
    paddingTop: 54,
  },
});

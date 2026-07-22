import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, Text} from 'react-native';

import {FactCard} from '../components/facts/FactCard';
import {colors, fonts, fontSize} from '../constants/theme';
import {QUICK_FACTS} from '../data/facts';

export function QuickFactsScreen() {
  return (
    <ImageBackground
      source={require('../assets/marivo_app_background.png')}
      resizeMode="cover"
      style={styles.QuickFactsScreenRootTide}>
      <ScrollView
        contentContainerStyle={styles.QuickFactsScreenListHarbor}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.QuickFactsScreenTitleLantern}>Quick Facts</Text>

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
  QuickFactsScreenRootTide: {
    flex: 1,
  },
  QuickFactsScreenTitleLantern: {
    color: colors.gold,
    fontFamily: fonts.sansExtraBold,
    fontSize: fontSize.title + 4,
    fontWeight: '800',
    lineHeight: 36,
  },
  QuickFactsScreenListHarbor: {
    gap: 14,
    paddingBottom: 24,
    paddingHorizontal: 20,
    paddingTop: 54,
  },
});

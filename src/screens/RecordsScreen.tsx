import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text } from 'react-native';

import { TrophyCard } from '../components/records/TrophyCard';
import { colors, fonts, fontSize } from '../constants/theme';

import { useQuiz } from '../context/QuizContext';

import { TROPHY_RECORDS } from '../data/records';

export function RecordsScreen() {
  const { totalPoints } = useQuiz();

  return (
    <ImageBackground
      source={require('../assets/hooka-marivo-guide-app-background.png')}
      resizeMode="cover"
      style={styles.RecordsScreenRootChassis}
    >
      <ScrollView
        contentContainerStyle={styles.RecordsScreenListChassis}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.RecordsScreenTitleFiligree}>
          Human Fishing Trophies
        </Text>
        <Text style={styles.RecordsScreenSubtitleFiligree}>
          Get more Quiz points to unlock the new Trophies
        </Text>

        {TROPHY_RECORDS.map(record => (
          <TrophyCard
            key={record.id}
            record={record}
            unlocked={totalPoints >= record.pointsRequired}
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  RecordsScreenRootChassis: {
    flex: 1,
  },
  RecordsScreenTitleFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansExtraBold,
    fontSize: fontSize.title + 4,
    fontWeight: '800',
    lineHeight: 36,
  },

  RecordsScreenSubtitleFiligree: {
    color: colors.white,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.caption,
    marginTop: 4,
  },

  RecordsScreenListChassis: {
    gap: 14,
    paddingBottom: 24,
    paddingHorizontal: 20,
    paddingTop: 54,
  },
});

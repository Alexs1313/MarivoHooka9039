import React from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '../../constants/theme';
import type { TrophyRecord } from '../../data/records';

import { TrophyLockIcon } from './TrophyLockIcon';

type TrophyCardProps = {
  record: TrophyRecord;
  unlocked: boolean;
};

export function TrophyCard({ record, unlocked }: TrophyCardProps) {
  return (
    <View style={styles.TrophyCardFacetChassis}>
      <View style={styles.TrophyCardImageFrameArt}>
        {unlocked ? (
          <Image
            source={record.image}
            resizeMode="contain"
            style={styles.TrophyCardImageArt}
          />
        ) : (
          <>
            <TrophyLockIcon />
            <Text style={styles.TrophyCardLockHintFiligree}>
              {`Get ${record.pointsRequired} points to get the trophy.`}
            </Text>
          </>
        )}
      </View>

      <View style={styles.TrophyCardBodyChassis}>
        <Text
          style={[
            styles.TrophyCardTitleFiligree,
            !unlocked && styles.TrophyCardTitleLockedFiligree,
          ]}
        >
          {record.title}
        </Text>

        {unlocked && (
          <>
            <Text style={styles.TrophyCardStatsFiligree}>
              {`Weight: ${record.weight}\nLength: ${record.length}`}
            </Text>
            {record.paragraphs.map((paragraph, index) => (
              <Text key={index} style={styles.TrophyCardParagraphFiligree}>
                {paragraph}
              </Text>
            ))}
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TrophyCardFacetChassis: {
    backgroundColor: colors.deepTeal,
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.26,
    shadowRadius: 12,
    elevation: 6,
    width: '100%',
  },

  TrophyCardImageFrameArt: {
    alignItems: 'center',
    height: 132,
    justifyContent: 'center',
    width: '100%',
  },

  TrophyCardImageArt: {
    height: '78%',
    width: '82%',
  },
  TrophyCardLockHintFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
  },
  TrophyCardBodyChassis: {
    padding: 12,
  },

  TrophyCardTitleFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansBold,
    fontSize: 13,
    fontWeight: '700',
  },

  TrophyCardTitleLockedFiligree: {
    color: 'rgba(255, 210, 74, 0.6)',
  },
  TrophyCardStatsFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
    lineHeight: 16.8,
    marginTop: 4,
    opacity: 0.7,
  },
  TrophyCardParagraphFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 12,
    lineHeight: 16.8,
    marginTop: 8,
    opacity: 0.7,
  },
});

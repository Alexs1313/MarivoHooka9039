import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { Dropdown } from '../components/forms/Dropdown';
import { SegmentedControl } from '../components/forms/SegmentedControl';
import { colors, fonts, fontSize, layout } from '../constants/theme';
import {
  FISH_SPECIES,
  SEASONS,
  WATER_TYPES,
  findBait,
  type FishSpecies,
  type Season,
  type WaterType,
} from '../data/baitFinder';

export function BaitFinderScreen() {
  const [waterType, setWaterType] = useState<WaterType>('River');
  const [season, setSeason] = useState<Season>('Summer');
  const [fish, setFish] = useState<FishSpecies>('Carp');
  const [result, setResult] = useState<ReturnType<typeof findBait> | null>(
    null,
  );

  return (
    <ImageBackground
      source={require('../assets/hooka-marivo-guide-app-background.png')}
      resizeMode="cover"
      style={styles.BaitFinderScreenRootChassis}
    >
      <ScrollView
        contentContainerStyle={styles.BaitFinderScreenContentChassis}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.BaitFinderScreenTitleFiligree}>Bait Finder</Text>
        <Text style={styles.BaitFinderScreenSubtitleFiligree}>
          Find the perfect bait for your catch
        </Text>

        <Image
          source={require('../assets/hooka-marivo-guide-baitfinder-hero.png')}
          resizeMode="contain"
          style={styles.BaitFinderScreenHeroChassis}
        />

        <View style={styles.BaitFinderScreenCardFacet}>
          <Dropdown
            label="Water Type"
            value={waterType}
            options={WATER_TYPES}
            onChange={value => {
              setWaterType(value as WaterType);
              setResult(null);
            }}
          />

          <View style={styles.BaitFinderScreenFieldGapFiligree}>
            <Text style={styles.BaitFinderScreenFieldLabelFiligree}>
              Season
            </Text>
            <SegmentedControl
              options={SEASONS}
              value={season}
              onChange={value => {
                setSeason(value as Season);
                setResult(null);
              }}
            />
          </View>

          <Dropdown
            label="Target Fish"
            value={fish}
            options={FISH_SPECIES}
            onChange={value => {
              setFish(value as FishSpecies);
              setResult(null);
            }}
          />

          <PrimaryButton
            label="Find Bait"
            variant="green"
            onPress={() => setResult(findBait(fish, waterType, season))}
          />
        </View>

        {result && (
          <View style={styles.BaitFinderScreenResultCardFacet}>
            {result.recommended ? (
              <>
                <ResultRow
                  icon="🎣"
                  label="Best Bait"
                  value={result.bestBait}
                  gold
                />
                <Divider />
                <ResultRow
                  icon="🪱"
                  label="Alternative Baits"
                  value={result.alternatives.join(' • ')}
                />
                <Divider />
                <ResultRow
                  icon="🕒"
                  label="Best Time"
                  value={result.bestTime}
                />
                <Divider />
                <ResultRow icon="💡" label="Fishing Tip" value={result.tip} />
              </>
            ) : (
              <>
                <ResultRow
                  icon="🚫"
                  label="Best Bait"
                  value="Not recommended for this water type"
                />
                <Divider />
                <ResultRow
                  icon="🕒"
                  label="Best Time"
                  value={result.bestTime}
                />
                <Divider />
                <ResultRow icon="💡" label="Fishing Tip" value={result.tip} />
              </>
            )}
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
}

type ResultRowProps = {
  icon: string;
  label: string;
  value: string;
  gold?: boolean;
};

function ResultRow({ icon, label, value, gold }: ResultRowProps) {
  return (
    <View style={styles.ResultRowRootChassis}>
      <View style={styles.ResultRowIconWrapPortico}>
        <Text style={styles.ResultRowIconSigil}>{icon}</Text>
      </View>
      <View style={styles.ResultRowTextColFiligree}>
        <Text style={styles.ResultRowLabelFiligree}>{label}</Text>
        <Text
          style={[
            styles.ResultRowValueFiligree,
            gold && styles.ResultRowValueGoldPortico,
          ]}
        >
          {value}
        </Text>
      </View>
    </View>
  );
}

function Divider() {
  return <View style={styles.DividerLineArt} />;
}

const styles = StyleSheet.create({
  BaitFinderScreenRootChassis: {
    flex: 1,
  },

  BaitFinderScreenContentChassis: {
    paddingBottom: 32,
    paddingHorizontal: layout.screenPaddingHorizontal,
    paddingTop: 54,
  },
  BaitFinderScreenTitleFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansExtraBold,
    fontSize: fontSize.title + 4,
    fontWeight: '800',
    lineHeight: 36,
  },

  BaitFinderScreenSubtitleFiligree: {
    color: 'rgba(255, 241, 181, 0.7)',
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.body,
    textAlign: 'center',
  },
  BaitFinderScreenHeroChassis: {
    alignSelf: 'center',
    height: 260,
    marginVertical: 12,
    width: 96,
  },

  BaitFinderScreenCardFacet: {
    backgroundColor: 'rgba(10, 78, 88, 0.8)',
    borderColor: 'rgba(30, 183, 200, 0.2)',
    borderRadius: 20,
    borderWidth: 1.5,
    gap: 16,
    padding: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.28,
    shadowRadius: 14,
    elevation: 6,
  },

  BaitFinderScreenFieldGapFiligree: {
    gap: 6,
  },
  BaitFinderScreenFieldLabelFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  BaitFinderScreenResultCardFacet: {
    backgroundColor: 'rgba(10, 78, 88, 0.8)',
    borderColor: 'rgba(30, 183, 200, 0.2)',
    borderRadius: 20,
    borderWidth: 1.5,
    gap: 16,
    marginTop: 20,
    padding: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.26,
    shadowRadius: 12,
    elevation: 5,
  },
  ResultRowRootChassis: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },

  ResultRowIconWrapPortico: {
    alignItems: 'center',
    backgroundColor: 'rgba(30, 183, 200, 0.1)',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },

  ResultRowIconSigil: {
    fontSize: 20,
  },
  ResultRowTextColFiligree: {
    flex: 1,
    gap: 2,
  },
  ResultRowLabelFiligree: {
    color: 'rgba(255, 241, 181, 0.7)',
    fontFamily: fonts.sansBold,
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  ResultRowValueFiligree: {
    color: colors.white,
    fontFamily: fonts.sansBold,
    fontSize: 16,
    fontWeight: '700',
  },

  ResultRowValueGoldPortico: {
    color: colors.gold,
    fontSize: 18,
  },

  DividerLineArt: {
    backgroundColor: 'rgba(255, 241, 181, 0.1)',
    height: 1,
    width: '100%',
  },
});

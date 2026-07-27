import React, { useState } from 'react';

import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { colors, fonts, fontSize, layout } from '../constants/theme';

import { getLocationById, LOCATIONS } from '../data/locations';
import { shareText } from '../utils/share';

const WORLD_REGION = {
  latitude: 25,
  longitude: 10,
  latitudeDelta: 110,
  longitudeDelta: 110,
};

export function WorldMapScreen() {
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(
    null,
  );
  const selectedLocation = selectedLocationId
    ? getLocationById(selectedLocationId)
    : undefined;

  return (
    <ImageBackground
      source={require('../assets/hooka-marivo-guide-app-background.png')}
      resizeMode="cover"
      style={styles.WorldMapScreenRootChassis}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.WorldMapScreenHeaderArt}>
          <Text style={styles.WorldMapScreenTitleFiligree}>World Map</Text>
          <Text style={styles.WorldMapScreenSubtitleFiligree}>
            Tap a pin to explore fishing civilizations
          </Text>
        </View>

        <View style={styles.WorldMapScreenMapFrameChassis}>
          <MapView
            style={styles.WorldMapScreenMapArt}
            initialRegion={WORLD_REGION}
          >
            {LOCATIONS.map(location => (
              <Marker
                key={location.id}
                coordinate={location.coordinate}
                onPress={() => setSelectedLocationId(location.id)}
              >
                <View style={styles.WorldMapScreenPinPortico}>
                  <View style={styles.WorldMapScreenPinDotFiligree} />
                </View>
              </Marker>
            ))}
          </MapView>
        </View>

        {selectedLocation && (
          <View style={styles.WorldMapScreenCardChassis}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.WorldMapScreenCardHeaderArt}>
                <Text style={styles.WorldMapScreenCardTitleFiligree}>
                  {selectedLocation.title}
                </Text>
                <Pressable
                  hitSlop={8}
                  onPress={() => setSelectedLocationId(null)}
                >
                  <Image
                    source={require('../assets/hooka-marivo-guide-icon-close.png')}
                    resizeMode="contain"
                    style={styles.WorldMapScreenCardCloseIconSigil}
                  />
                </Pressable>
              </View>

              <View style={styles.WorldMapScreenCardHeroChassis}>
                {selectedLocation.hero ? (
                  <Image
                    source={selectedLocation.hero}
                    resizeMode="contain"
                    style={styles.WorldMapScreenCardHeroImageArt}
                  />
                ) : null}
              </View>

              {selectedLocation.paragraphs.map((paragraph, index) => (
                <Text
                  key={index}
                  style={styles.WorldMapScreenCardParagraphFiligree}
                >
                  {paragraph}
                </Text>
              ))}

              <View style={styles.WorldMapScreenCardButtonWrapPortico}>
                <PrimaryButton
                  label="Share"
                  variant="orange"
                  icon={require('../assets/hooka-marivo-guide-icon-share.png')}
                  onPress={() =>
                    shareText(
                      selectedLocation.title,
                      `${
                        selectedLocation.title
                      }\n\n${selectedLocation.paragraphs.join('\n\n')}`,
                    )
                  }
                />
              </View>
            </ScrollView>
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  WorldMapScreenRootChassis: {
    flex: 1,
  },

  WorldMapScreenHeaderArt: {
    paddingHorizontal: layout.screenPaddingHorizontal,
    paddingTop: 54,
  },
  WorldMapScreenTitleFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansExtraBold,
    fontSize: fontSize.title + 4,
    fontWeight: '800',
    lineHeight: 36,
  },

  WorldMapScreenSubtitleFiligree: {
    color: colors.white,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.caption,
    textAlign: 'center',
  },

  WorldMapScreenMapFrameChassis: {
    backgroundColor: '#0a1520',
    borderColor: 'rgba(22, 59, 99, 0.38)',
    borderRadius: 14,
    borderWidth: 1.5,
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    overflow: 'hidden',
  },
  WorldMapScreenMapArt: {
    flex: 1,
  },

  WorldMapScreenPinPortico: {
    alignItems: 'center',
    backgroundColor: colors.gold,
    borderColor: colors.white,
    borderRadius: 13,
    borderWidth: 2,
    height: 26,
    justifyContent: 'center',
    width: 26,
  },
  WorldMapScreenPinDotFiligree: {
    backgroundColor: colors.white,
    borderRadius: 4,
    height: 8,
    width: 8,
  },

  WorldMapScreenCardChassis: {
    backgroundColor: 'rgba(10, 78, 88, 0.94)',
    borderRadius: 16,
    bottom: 96,
    left: 20,
    maxHeight: 488,
    padding: 14,
    position: 'absolute',
    right: 20,
  },

  WorldMapScreenCardHeaderArt: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  WorldMapScreenCardTitleFiligree: {
    color: colors.gold,
    flexShrink: 1,
    fontFamily: fonts.sansBold,
    fontSize: 16,
    fontWeight: '700',
  },

  WorldMapScreenCardCloseIconSigil: {
    height: 20,
    width: 20,
  },
  WorldMapScreenCardHeroChassis: {
    alignItems: 'center',
    backgroundColor: colors.deepTeal,
    borderRadius: 10,
    height: 193,
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
  },
  WorldMapScreenCardHeroImageArt: {
    height: '100%',
    width: '100%',
  },
  WorldMapScreenCardParagraphFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    lineHeight: 16,
    marginTop: 10,
  },

  WorldMapScreenCardButtonWrapPortico: {
    marginTop: 12,
  },
});

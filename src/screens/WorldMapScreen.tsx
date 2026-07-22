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
      source={require('../assets/marivo_app_background.png')}
      resizeMode="cover"
      style={styles.WorldMapScreenRootTide}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.WorldMapScreenHeaderLintel}>
          <Text style={styles.WorldMapScreenTitleLantern}>World Map</Text>
          <Text style={styles.WorldMapScreenSubtitleDriftwood}>
            Tap a pin to explore fishing civilizations
          </Text>
        </View>

        <View style={styles.WorldMapScreenMapFrameReef}>
          <MapView
            style={styles.WorldMapScreenMapCurrent}
            initialRegion={WORLD_REGION}
          >
            {LOCATIONS.map(location => (
              <Marker
                key={location.id}
                coordinate={location.coordinate}
                onPress={() => setSelectedLocationId(location.id)}
              >
                <View style={styles.WorldMapScreenPinAnchor}>
                  <View style={styles.WorldMapScreenPinDotFathom} />
                </View>
              </Marker>
            ))}
          </MapView>
        </View>

        {selectedLocation && (
          <View style={styles.WorldMapScreenCardHarbor}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.WorldMapScreenCardHeaderLintel}>
                <Text style={styles.WorldMapScreenCardTitleLantern}>
                  {selectedLocation.title}
                </Text>
                <Pressable
                  hitSlop={8}
                  onPress={() => setSelectedLocationId(null)}
                >
                  <Image
                    source={require('../assets/marivo_icon_close.png')}
                    resizeMode="contain"
                    style={styles.WorldMapScreenCardCloseIconCompass}
                  />
                </Pressable>
              </View>

              <View style={styles.WorldMapScreenCardHeroReef}>
                {selectedLocation.hero ? (
                  <Image
                    source={selectedLocation.hero}
                    resizeMode="contain"
                    style={styles.WorldMapScreenCardHeroImageCurrent}
                  />
                ) : (
                  <View
                    style={styles.WorldMapScreenCardHeroPlaceholderFathom}
                  />
                )}
              </View>

              {selectedLocation.paragraphs.map((paragraph, index) => (
                <Text
                  key={index}
                  style={styles.WorldMapScreenCardParagraphDriftwood}
                >
                  {paragraph}
                </Text>
              ))}

              <View style={styles.WorldMapScreenCardButtonWrapVoyage}>
                <PrimaryButton
                  label="Share"
                  variant="orange"
                  icon={require('../assets/marivo_icon_share.png')}
                  onPress={() =>
                    shareText(
                      selectedLocation.title,
                      `${selectedLocation.title}\n\n${selectedLocation.paragraphs.join('\n\n')}`,
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
  WorldMapScreenRootTide: {
    flex: 1,
  },
  WorldMapScreenHeaderLintel: {
    paddingHorizontal: layout.screenPaddingHorizontal,
    paddingTop: 54,
  },
  WorldMapScreenTitleLantern: {
    color: colors.gold,
    fontFamily: fonts.sansExtraBold,
    fontSize: fontSize.title + 4,
    fontWeight: '800',
    lineHeight: 36,
  },
  WorldMapScreenSubtitleDriftwood: {
    color: colors.white,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.caption,
    textAlign: 'center',
  },
  WorldMapScreenMapFrameReef: {
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
  WorldMapScreenMapCurrent: {
    flex: 1,
  },
  WorldMapScreenPinAnchor: {
    alignItems: 'center',
    backgroundColor: colors.gold,
    borderColor: colors.white,
    borderRadius: 13,
    borderWidth: 2,
    height: 26,
    justifyContent: 'center',
    width: 26,
  },
  WorldMapScreenPinDotFathom: {
    backgroundColor: colors.white,
    borderRadius: 4,
    height: 8,
    width: 8,
  },
  WorldMapScreenCardHarbor: {
    backgroundColor: 'rgba(10, 78, 88, 0.94)',
    borderRadius: 16,
    bottom: 96,
    left: 20,
    maxHeight: 488,
    padding: 14,
    position: 'absolute',
    right: 20,
  },
  WorldMapScreenCardHeaderLintel: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  WorldMapScreenCardTitleLantern: {
    color: colors.gold,
    flexShrink: 1,
    fontFamily: fonts.sansBold,
    fontSize: 16,
    fontWeight: '700',
  },
  WorldMapScreenCardCloseIconCompass: {
    height: 20,
    width: 20,
  },
  WorldMapScreenCardHeroReef: {
    alignItems: 'center',
    backgroundColor: colors.deepTeal,
    borderRadius: 10,
    height: 193,
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
  },
  WorldMapScreenCardHeroImageCurrent: {
    height: '100%',
    width: '100%',
  },
  WorldMapScreenCardHeroPlaceholderFathom: {
    backgroundColor: colors.teal,
    borderRadius: 20,
    height: 40,
    opacity: 0.28,
    width: 40,
  },
  WorldMapScreenCardParagraphDriftwood: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    lineHeight: 16,
    marginTop: 10,
  },
  WorldMapScreenCardButtonWrapVoyage: {
    marginTop: 12,
  },
});

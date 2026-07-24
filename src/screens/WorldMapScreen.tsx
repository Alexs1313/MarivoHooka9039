import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const isLandscape = width > height;

  return (
    <ImageBackground
      source={require('../assets/marivo_app_background.png')}
      resizeMode="cover"
      style={styles.WorldMapScreenRootTide}
    >
      <View style={styles.WorldMapScreenContentHarbor}>
        <View
          style={[
            styles.WorldMapScreenHeaderLintel,
            { paddingTop: Math.max(insets.top, 12) + (isLandscape ? 4 : 18) },
          ]}
        >
          <Text style={styles.WorldMapScreenTitleLantern}>World Map</Text>
          <Text style={styles.WorldMapScreenSubtitleDriftwood}>
            Tap a pin to explore fishing civilizations
          </Text>
        </View>

        <View
          style={[
            styles.WorldMapScreenMapFrameReef,
            isLandscape && styles.WorldMapScreenMapFrameReefLandscape,
          ]}
        >
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
      </View>

      {selectedLocation && (
        <View
          style={[
            styles.WorldMapScreenCardHarbor,
            {
              left: Math.max(insets.left, 12) + 8,
              right: Math.max(insets.right, 12) + 8,
              ...(isLandscape
                ? {
                    top: Math.max(insets.top, 8) + 8,
                    bottom: 12,
                  }
                : {
                    bottom: 16,
                    maxHeight: Math.min(488, height * 0.62),
                  }),
            },
          ]}
        >
          <View style={styles.WorldMapScreenCardHeaderLintel}>
            <Text
              style={styles.WorldMapScreenCardTitleLantern}
              numberOfLines={2}
            >
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

          {isLandscape ? (
            <View style={styles.WorldMapScreenCardBodyHullLandscape}>
              <View style={styles.WorldMapScreenCardHeroReefLandscape}>
                {selectedLocation.hero ? (
                  <Image
                    source={selectedLocation.hero}
                    resizeMode="cover"
                    style={styles.WorldMapScreenCardHeroImageCurrent}
                  />
                ) : (
                  <View style={styles.WorldMapScreenCardHeroPlaceholderFathom} />
                )}
              </View>

              <View style={styles.WorldMapScreenCardCopyTideLandscape}>
                <ScrollView
                  style={styles.WorldMapScreenCardScrollCurrent}
                  contentContainerStyle={
                    styles.WorldMapScreenCardScrollContentVoyage
                  }
                  showsVerticalScrollIndicator={false}
                  bounces={false}
                >
                  {selectedLocation.paragraphs.map((paragraph, index) => (
                    <Text
                      key={index}
                      style={[
                        styles.WorldMapScreenCardParagraphDriftwood,
                        index === 0 && styles.WorldMapScreenCardParagraphFirst,
                      ]}
                    >
                      {paragraph}
                    </Text>
                  ))}
                </ScrollView>

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
              </View>
            </View>
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              bounces={false}
              style={styles.WorldMapScreenCardScrollCurrent}
            >
              <View style={styles.WorldMapScreenCardHeroReef}>
                {selectedLocation.hero ? (
                  <Image
                    source={selectedLocation.hero}
                    resizeMode="cover"
                    style={styles.WorldMapScreenCardHeroImageCurrent}
                  />
                ) : (
                  <View style={styles.WorldMapScreenCardHeroPlaceholderFathom} />
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
          )}
        </View>
      )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  WorldMapScreenRootTide: {
    flex: 1,
  },
  WorldMapScreenContentHarbor: {
    flex: 1,
  },
  WorldMapScreenHeaderLintel: {
    paddingHorizontal: layout.screenPaddingHorizontal,
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
  WorldMapScreenMapFrameReefLandscape: {
    marginBottom: 12,
    marginTop: 10,
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
    backgroundColor: 'rgba(10, 78, 88, 0.96)',
    borderRadius: 16,
    overflow: 'hidden',
    padding: 14,
    position: 'absolute',
  },
  WorldMapScreenCardHeaderLintel: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  WorldMapScreenCardTitleLantern: {
    color: colors.gold,
    flex: 1,
    flexShrink: 1,
    fontFamily: fonts.sansBold,
    fontSize: 16,
    fontWeight: '700',
    marginRight: 12,
  },
  WorldMapScreenCardCloseIconCompass: {
    height: 20,
    width: 20,
  },
  WorldMapScreenCardBodyHullLandscape: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 0,
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
  WorldMapScreenCardHeroReefLandscape: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: colors.deepTeal,
    borderRadius: 10,
    flex: 0.42,
    justifyContent: 'center',
    marginRight: 14,
    maxWidth: 280,
    overflow: 'hidden',
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
  WorldMapScreenCardCopyTideLandscape: {
    flex: 0.58,
    minWidth: 0,
  },
  WorldMapScreenCardScrollCurrent: {
    flexGrow: 1,
    flexShrink: 1,
  },
  WorldMapScreenCardScrollContentVoyage: {
    flexGrow: 1,
    paddingBottom: 4,
  },
  WorldMapScreenCardParagraphDriftwood: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 10,
    lineHeight: 16,
    marginTop: 10,
  },
  WorldMapScreenCardParagraphFirst: {
    marginTop: 0,
  },
  WorldMapScreenCardButtonWrapVoyage: {
    marginTop: 12,
  },
});

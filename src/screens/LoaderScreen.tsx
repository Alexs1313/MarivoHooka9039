import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

import { LoaderSpinner } from '../components/loader/LoaderSpinner';
import { useNavigation } from '../navigation/NavigationContext';

const LOADER_DURATION_MS = 3000;

export function LoaderScreen() {
  const { finishLoading } = useNavigation();

  useEffect(() => {
    const timer = setTimeout(finishLoading, LOADER_DURATION_MS);
    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <ImageBackground
      source={require('../assets/marivo_app_background.png')}
      resizeMode="cover"
      style={styles.LoaderScreenRootTide}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('../assets/icon.png')}
          style={{
            width: 220,
            height: 220,
            marginBottom: 20,
            borderRadius: 50,
          }}
        />
      </View>
      <LoaderSpinner size={40} style={styles.LoaderScreenSpinnerCurrent} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  LoaderScreenRootTide: {
    alignItems: 'center',
    flex: 1,
  },
  LoaderScreenLogoAnchor: {
    height: 110,
    marginTop: '9%',
    width: 260,
  },
  LoaderScreenSpinnerCurrent: {
    bottom: 48,
    position: 'absolute',
  },
});

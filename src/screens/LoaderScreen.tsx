import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

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
      source={require('../assets/hooka-marivo-guide-loader-bg.png')}
      resizeMode="cover"
      style={styles.LoaderScreenRootChassis}
    >
      <LoaderSpinner size={40} style={styles.LoaderScreenSpinnerArt} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  LoaderScreenRootChassis: {
    alignItems: 'center',
    flex: 1,
  },
  LoaderScreenSpinnerArt: {
    bottom: 48,
    position: 'absolute',
  },
});

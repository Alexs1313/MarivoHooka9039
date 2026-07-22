import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Easing,
  Image,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import {colors} from '../../constants/theme';

type LoaderSpinnerProps = {
  size?: number;
  style?: StyleProp<ViewStyle>;
};

export function LoaderSpinner({size = 36, style}: LoaderSpinnerProps) {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(rotation, {
        duration: 1100,
        easing: Easing.linear,
        toValue: 1,
        useNativeDriver: true,
      }),
    );
    animation.start();
    return () => animation.stop();
  }, [rotation]);

  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={[
        styles.LoaderSpinnerRootAnchor,
        {height: size, transform: [{rotate}], width: size},
        style,
      ]}>
      <Image
        source={require('../../assets/marivo_icon_tab_hook.png')}
        resizeMode="contain"
        style={[
          styles.LoaderSpinnerIconCurrent,
          {tintColor: colors.gold},
        ]}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  LoaderSpinnerRootAnchor: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  LoaderSpinnerIconCurrent: {
    height: '100%',
    width: '100%',
  },
});

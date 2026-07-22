import {Platform} from 'react-native';

import {fonts} from './fonts';

export const DESIGN_WIDTH = 393;
export const DESIGN_HEIGHT = 852;

export const colors = {
  background: '#062024',
  deepTeal: '#0a4e58',
  teal: '#1eb7c8',
  gold: '#ffd24a',
  goldDeep: '#0a2e35',
  cream: '#fff1b5',
  green: '#2d8a54',
  orange: '#f28a22',
  red: '#b3394a',
  dotInactive: 'rgba(255, 241, 181, 0.3)',
  overlay: 'rgba(6, 32, 36, 0.4)',
  white: '#ffffff',
  black: '#000000',
};

export const spacing = {
  s: 8,
  m: 12,
  l: 16,
  xl: 20,
  xxl: 28,
};

export const radius = {
  card: 20,
  badge: 14,
  button: 14,
  pill: 4,
};

export const fontSize = {
  caption: 12,
  body: 14,
  button: 16,
  title: 20,
};

export const layout = {
  screenPaddingHorizontal: 28,
  screenPaddingTop: 60,
  screenPaddingBottom: 36,
  heroSize: 340,
  buttonHeight: 52,
};

export const topInset = (value: number) =>
  Platform.OS === 'android' ? Math.max(value, 30) : value;

export {fonts};

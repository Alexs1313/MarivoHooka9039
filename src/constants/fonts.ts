import {Platform} from 'react-native';

const ios = {
  sansRegular: 'System',
  sansSemiBold: 'System',
  sansBold: 'System',
  sansExtraBold: 'System',
};

const android = {
  sansRegular: 'sans-serif',
  sansSemiBold: 'sans-serif-medium',
  sansBold: 'sans-serif',
  sansExtraBold: 'sans-serif',
};

const platformFonts = Platform.OS === 'ios' ? ios : android;

export const fonts = {
  sansRegular: platformFonts.sansRegular,
  sansSemiBold: platformFonts.sansSemiBold,
  sansBold: platformFonts.sansBold,
  sansExtraBold: platformFonts.sansExtraBold,
};

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors, fonts} from '../../constants/theme';

type ArticleTagBadgeProps = {
  label: string;
};

export function ArticleTagBadge({label}: ArticleTagBadgeProps) {
  return (
    <View style={styles.ArticleTagBadgePillReef}>
      <Text style={styles.ArticleTagBadgeLabelReef}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ArticleTagBadgePillReef: {
    alignSelf: 'flex-start',
    backgroundColor: colors.teal,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  ArticleTagBadgeLabelReef: {
    color: colors.white,
    fontFamily: fonts.sansBold,
    fontSize: 11,
    fontWeight: '700',
  },
});

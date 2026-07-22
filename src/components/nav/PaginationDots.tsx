import React from 'react';
import {StyleSheet, View} from 'react-native';

import {colors, radius} from '../../constants/theme';

type PaginationDotsProps = {
  count: number;
  activeIndex: number;
};

export function PaginationDots({count, activeIndex}: PaginationDotsProps) {
  return (
    <View style={styles.PaginationDotsRootHarbor}>
      {Array.from({length: count}).map((_, index) => (
        <View
          key={index}
          style={
            index === activeIndex
              ? styles.PaginationDotsActiveCompass
              : styles.PaginationDotsInactiveCompass
          }
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  PaginationDotsRootHarbor: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 7,
    justifyContent: 'center',
  },
  PaginationDotsActiveCompass: {
    backgroundColor: colors.gold,
    borderRadius: radius.pill,
    height: 7,
    width: 22,
  },
  PaginationDotsInactiveCompass: {
    backgroundColor: colors.dotInactive,
    borderRadius: radius.pill,
    height: 7,
    width: 7,
  },
});

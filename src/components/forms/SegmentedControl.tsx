import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {colors, fonts} from '../../constants/theme';

type SegmentedControlProps = {
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
};

export function SegmentedControl({
  options,
  value,
  onChange,
}: SegmentedControlProps) {
  return (
    <View style={styles.SegmentedControlRootHarbor}>
      {options.map(option => {
        const active = option === value;
        return (
          <Pressable
            key={option}
            onPress={() => onChange(option)}
            style={[
              styles.SegmentedControlSegmentAnchor,
              active && styles.SegmentedControlSegmentActiveTeal,
            ]}>
            <Text
              style={[
                styles.SegmentedControlLabelDriftwood,
                active && styles.SegmentedControlLabelActiveVoyage,
              ]}>
              {option}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  SegmentedControlRootHarbor: {
    backgroundColor: '#06353e',
    borderRadius: 12,
    flexDirection: 'row',
    gap: 4,
    padding: 4,
    width: '100%',
  },
  SegmentedControlSegmentAnchor: {
    alignItems: 'center',
    borderRadius: 8,
    flex: 1,
    paddingVertical: 8,
  },
  SegmentedControlSegmentActiveTeal: {
    backgroundColor: colors.teal,
  },
  SegmentedControlLabelDriftwood: {
    color: 'rgba(255, 241, 181, 0.5)',
    fontFamily: fonts.sansSemiBold,
    fontSize: 12,
    fontWeight: '600',
  },
  SegmentedControlLabelActiveVoyage: {
    color: colors.white,
  },
});

import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors, fonts } from '../../constants/theme';

type DropdownProps = {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
};

export function Dropdown({ label, value, options, onChange }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.DropdownFieldChassis}>
      <Text style={styles.DropdownLabelFiligree}>{label}</Text>

      <Pressable
        onPress={() => setOpen(true)}
        style={styles.DropdownTriggerChassis}
      >
        <Text style={styles.DropdownValueFiligree}>{value}</Text>
        <Image
          source={require('../../assets/hooka-marivo-guide-icon-chevron-down.png')}
          resizeMode="contain"
          style={styles.DropdownChevronSigil}
        />
      </Pressable>

      <Modal visible={open} transparent animationType="fade">
        <Pressable
          style={styles.DropdownOverlayArt}
          onPress={() => setOpen(false)}
        >
          <View style={styles.DropdownSheetChassis}>
            <FlatList
              data={options}
              keyExtractor={item => item}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => {
                    onChange(item);
                    setOpen(false);
                  }}
                  style={styles.DropdownOptionPortico}
                >
                  <Text
                    style={[
                      styles.DropdownOptionLabelPortico,
                      item === value && styles.DropdownOptionLabelActiveGold,
                    ]}
                  >
                    {item}
                  </Text>
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  DropdownFieldChassis: {
    gap: 6,
    width: '100%',
  },

  DropdownLabelFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  DropdownTriggerChassis: {
    alignItems: 'center',
    backgroundColor: colors.deepTeal,
    borderColor: 'rgba(255, 241, 181, 0.12)',
    borderRadius: 12,
    borderWidth: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: '100%',
  },

  DropdownValueFiligree: {
    color: colors.white,
    fontFamily: fonts.sansSemiBold,
    fontSize: 14,
    fontWeight: '600',
  },
  DropdownChevronSigil: {
    height: 8,
    width: 12,
  },
  DropdownOverlayArt: {
    alignItems: 'center',
    backgroundColor: 'rgba(6, 32, 36, 0.7)',
    flex: 1,
    justifyContent: 'center',
    padding: 32,
  },

  DropdownSheetChassis: {
    backgroundColor: colors.deepTeal,
    borderColor: colors.teal,
    borderRadius: 16,
    borderWidth: 1,
    maxHeight: 360,
    overflow: 'hidden',
    width: '100%',
  },

  DropdownOptionPortico: {
    borderBottomColor: 'rgba(255, 241, 181, 0.1)',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },

  DropdownOptionLabelPortico: {
    color: colors.cream,
    fontFamily: fonts.sansSemiBold,
    fontSize: 15,
    fontWeight: '600',
  },
  DropdownOptionLabelActiveGold: {
    color: colors.gold,
  },
});

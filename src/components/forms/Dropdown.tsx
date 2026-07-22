import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {colors, fonts} from '../../constants/theme';

type DropdownProps = {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
};

export function Dropdown({label, value, options, onChange}: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.DropdownFieldTide}>
      <Text style={styles.DropdownLabelDriftwood}>{label}</Text>

      <Pressable
        onPress={() => setOpen(true)}
        style={styles.DropdownTriggerHarbor}>
        <Text style={styles.DropdownValueLantern}>{value}</Text>
        <Image
          source={require('../../assets/marivo_icon_chevron_down.png')}
          resizeMode="contain"
          style={styles.DropdownChevronCompass}
        />
      </Pressable>

      <Modal visible={open} transparent animationType="fade">
        <Pressable
          style={styles.DropdownOverlayCurrent}
          onPress={() => setOpen(false)}>
          <View style={styles.DropdownSheetReef}>
            <FlatList
              data={options}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <Pressable
                  onPress={() => {
                    onChange(item);
                    setOpen(false);
                  }}
                  style={styles.DropdownOptionAnchor}>
                  <Text
                    style={[
                      styles.DropdownOptionLabelVoyage,
                      item === value && styles.DropdownOptionLabelActiveGold,
                    ]}>
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
  DropdownFieldTide: {
    gap: 6,
    width: '100%',
  },
  DropdownLabelDriftwood: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  DropdownTriggerHarbor: {
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
  DropdownValueLantern: {
    color: colors.white,
    fontFamily: fonts.sansSemiBold,
    fontSize: 14,
    fontWeight: '600',
  },
  DropdownChevronCompass: {
    height: 8,
    width: 12,
  },
  DropdownOverlayCurrent: {
    alignItems: 'center',
    backgroundColor: 'rgba(6, 32, 36, 0.7)',
    flex: 1,
    justifyContent: 'center',
    padding: 32,
  },
  DropdownSheetReef: {
    backgroundColor: colors.deepTeal,
    borderColor: colors.teal,
    borderRadius: 16,
    borderWidth: 1,
    maxHeight: 360,
    overflow: 'hidden',
    width: '100%',
  },
  DropdownOptionAnchor: {
    borderBottomColor: 'rgba(255, 241, 181, 0.1)',
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  DropdownOptionLabelVoyage: {
    color: colors.cream,
    fontFamily: fonts.sansSemiBold,
    fontSize: 15,
    fontWeight: '600',
  },
  DropdownOptionLabelActiveGold: {
    color: colors.gold,
  },
});

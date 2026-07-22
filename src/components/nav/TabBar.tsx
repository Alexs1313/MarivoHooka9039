import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

import { colors } from '../../constants/theme';
import type { MainTab } from '../../navigation/types';

const TAB_ITEMS: { tab: MainTab; icon: number }[] = [
  { tab: 'Discover', icon: require('../../assets/marivo_icon_tab_book.png') },
  { tab: 'Map', icon: require('../../assets/marivo_icon_tab_pin.png') },
  { tab: 'Catches', icon: require('../../assets/marivo_icon_tab_hook.png') },
  { tab: 'Quiz', icon: require('../../assets/marivo_icon_tab_question.png') },
  { tab: 'Records', icon: require('../../assets/marivo_icon_tab_trophy.png') },
  { tab: 'Extras', icon: require('../../assets/marivo_icon_tab_sparkle.png') },
];

type TabBarProps = {
  activeTab: MainTab;
  onSelect: (tab: MainTab) => void;
};

export function TabBar({ activeTab, onSelect }: TabBarProps) {
  return (
    <View style={styles.TabBarRootHarbor}>
      {TAB_ITEMS.map(item => (
        <Pressable
          key={item.tab}
          hitSlop={8}
          onPress={() => onSelect(item.tab)}
          style={styles.TabBarButtonAnchor}
        >
          <Image
            source={item.icon}
            resizeMode="contain"
            style={[
              styles.TabBarIconCompass,
              {
                tintColor: item.tab === activeTab ? colors.gold : colors.cream,
                opacity: item.tab === activeTab ? 1 : 0.55,
              },
            ]}
          />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  TabBarRootHarbor: {
    alignItems: 'center',
    backgroundColor: colors.deepTeal,
    borderTopColor: 'rgba(30, 183, 200, 0.18)',
    borderTopWidth: 1.5,
    flexDirection: 'row',
    height: 86,
    justifyContent: 'space-evenly',
    paddingBottom: 15,
  },
  TabBarButtonAnchor: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
  },
  TabBarIconCompass: {
    height: 22,
    width: 22,
  },
});

import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TabBar } from '../components/nav/TabBar';
import { ArticleDetailScreen } from '../screens/ArticleDetailScreen';
import { BaitFinderScreen } from '../screens/BaitFinderScreen';
import { ComingSoonScreen } from '../screens/ComingSoonScreen';
import { DiscoverScreen } from '../screens/DiscoverScreen';
import { QuickFactsScreen } from '../screens/QuickFactsScreen';
import { QuizScreen } from '../screens/QuizScreen';
import { RecordsScreen } from '../screens/RecordsScreen';
import { WorldMapScreen } from '../screens/WorldMapScreen';
import { useNavigation } from './NavigationContext';
import type { MainTab } from './types';

const TAB_LABELS: Record<MainTab, string> = {
  Discover: 'Discover',
  Map: 'Fishing Map',
  Catches: 'My Catches',
  Quiz: 'Knowledge Quiz',
  Records: 'Records',
  Extras: 'Extras',
};

export function MainShell() {
  const { mainTab, setMainTab, overlay } = useNavigation();

  return (
    <View style={styles.MainShellRootTide}>
      <View style={styles.MainShellContentHarbor}>
        {overlay.type === 'ArticleDetail' ? (
          <ArticleDetailScreen articleId={overlay.articleId} />
        ) : mainTab === 'Discover' ? (
          <DiscoverScreen />
        ) : mainTab === 'Map' ? (
          <WorldMapScreen />
        ) : mainTab === 'Catches' ? (
          <BaitFinderScreen />
        ) : mainTab === 'Quiz' ? (
          <QuizScreen />
        ) : mainTab === 'Records' ? (
          <RecordsScreen />
        ) : mainTab === 'Extras' ? (
          <QuickFactsScreen />
        ) : (
          <ComingSoonScreen label={TAB_LABELS[mainTab]} />
        )}
      </View>

      <TabBar activeTab={mainTab} onSelect={setMainTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  MainShellRootTide: {
    flex: 1,
  },
  MainShellContentHarbor: {
    flex: 1,
  },
});

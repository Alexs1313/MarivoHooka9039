import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TabBar } from '../components/nav/TabBar';
import { ArticleDetailScreen } from '../screens/ArticleDetailScreen';
import { BaitFinderScreen } from '../screens/BaitFinderScreen';
import { DiscoverScreen } from '../screens/DiscoverScreen';

import { QuickFactsScreen } from '../screens/QuickFactsScreen';
import { QuizScreen } from '../screens/QuizScreen';

import { RecordsScreen } from '../screens/RecordsScreen';
import { WorldMapScreen } from '../screens/WorldMapScreen';
import { useNavigation } from './NavigationContext';

export function MainShell() {
  const { mainTab, setMainTab, overlay } = useNavigation();

  return (
    <View style={styles.MainShellRootChassis}>
      <View style={styles.MainShellContentChassis}>
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
        ) : (
          <QuickFactsScreen />
        )}
      </View>

      <TabBar activeTab={mainTab} onSelect={setMainTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  MainShellRootChassis: {
    flex: 1,
  },
  MainShellContentChassis: {
    flex: 1,
  },
});

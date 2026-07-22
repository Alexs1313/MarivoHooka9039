import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text } from 'react-native';

import { ArticleCard } from '../components/articles/ArticleCard';
import { colors, fonts, fontSize } from '../constants/theme';
import { useArticles } from '../context/ArticlesContext';
import { ARTICLES } from '../data/articles';
import { useNavigation } from '../navigation/NavigationContext';

export function DiscoverScreen() {
  const { openArticleDetail } = useNavigation();
  const { isArticleSaved, toggleSaved } = useArticles();

  return (
    <ImageBackground
      source={require('../assets/marivo_app_background.png')}
      resizeMode="cover"
      style={styles.DiscoverScreenRootTide}
    >
      <ScrollView
        contentContainerStyle={styles.DiscoverScreenListHarbor}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.DiscoverScreenTitleLantern}>Discover</Text>

        {ARTICLES.map(article => (
          <ArticleCard
            key={article.id}
            article={article}
            saved={isArticleSaved(article.id)}
            onPress={() => openArticleDetail(article.id)}
            onToggleSaved={() => toggleSaved(article.id)}
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  DiscoverScreenRootTide: {
    flex: 1,
  },
  DiscoverScreenTitleLantern: {
    color: colors.gold,
    fontFamily: fonts.sansExtraBold,
    fontSize: fontSize.title + 4,
    fontWeight: '800',
    lineHeight: 36,
  },
  DiscoverScreenListHarbor: {
    gap: 14,
    paddingBottom: 24,
    paddingHorizontal: 20,
    paddingTop: 54,
  },
});

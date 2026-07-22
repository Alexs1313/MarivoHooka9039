import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { ArticleTagBadge } from '../components/articles/ArticleTagBadge';
import { colors, fonts, fontSize } from '../constants/theme';
import { useArticles } from '../context/ArticlesContext';
import { getArticleById } from '../data/articles';
import { useNavigation } from '../navigation/NavigationContext';
import { shareText } from '../utils/share';

type ArticleDetailScreenProps = {
  articleId: string;
};

export function ArticleDetailScreen({ articleId }: ArticleDetailScreenProps) {
  const { closeOverlay } = useNavigation();
  const { isArticleSaved, isArticleRead, toggleSaved, markAsRead } =
    useArticles();
  const article = getArticleById(articleId);

  if (!article) {
    return null;
  }

  const saved = isArticleSaved(article.id);
  const read = isArticleRead(article.id);

  return (
    <ImageBackground
      source={require('../assets/marivo_app_background.png')}
      resizeMode="cover"
      style={styles.ArticleDetailScreenRootTide}
    >
      <ScrollView
        contentContainerStyle={styles.ArticleDetailScreenContentHarbor}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.ArticleDetailScreenHeaderLintel}>
          <Pressable hitSlop={8} onPress={closeOverlay}>
            <Text style={styles.ArticleDetailScreenBackArrowAnchor}>←</Text>
          </Pressable>
          <Text style={styles.ArticleDetailScreenHeaderLabelLantern}>
            Article
          </Text>
          <View style={styles.ArticleDetailScreenHeaderSpacerHorizon} />
          <Pressable hitSlop={8} onPress={() => toggleSaved(article.id)}>
            <Image
              source={
                saved
                  ? require('../assets/marivo_icon_heart_filled.png')
                  : require('../assets/marivo_icon_heart_outline.png')
              }
              resizeMode="contain"
              style={styles.ArticleDetailScreenHeaderIconCompass}
            />
          </Pressable>
          <Pressable
            hitSlop={8}
            style={styles.ArticleDetailScreenShareButtonAnchor}
            onPress={() =>
              shareText(article.title, `${article.title}\n\n${article.paragraphs.join('\n\n')}`)
            }
          >
            <Image
              source={require('../assets/marivo_icon_share.png')}
              resizeMode="contain"
              style={styles.ArticleDetailScreenHeaderIconCompass}
            />
          </Pressable>
        </View>

        <View style={styles.ArticleDetailScreenHeroReef}>
          {article.hero ? (
            <Image
              source={article.hero}
              resizeMode="cover"
              style={styles.ArticleDetailScreenHeroImageCurrent}
            />
          ) : (
            <View style={styles.ArticleDetailScreenHeroPlaceholderFathom} />
          )}
        </View>

        <View style={styles.ArticleDetailScreenBadgeRowHorizon}>
          <ArticleTagBadge label={article.period} />
        </View>

        <Text style={styles.ArticleDetailScreenTitleLantern}>
          {article.title}
        </Text>

        {article.paragraphs.map((paragraph, index) => (
          <Text
            key={index}
            style={styles.ArticleDetailScreenParagraphDriftwood}
          >
            {paragraph}
          </Text>
        ))}

        <View style={styles.ArticleDetailScreenButtonWrapVoyage}>
          <PrimaryButton
            label={read ? 'Marked As Read' : 'Mark As Read'}
            variant="green"
            onPress={() => markAsRead(article.id)}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  ArticleDetailScreenRootTide: {
    flex: 1,
  },
  ArticleDetailScreenHeaderLintel: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  ArticleDetailScreenBackArrowAnchor: {
    color: colors.gold,
    fontSize: 22,
    padding: 6,
  },
  ArticleDetailScreenHeaderLabelLantern: {
    color: colors.gold,
    fontFamily: fonts.sansBold,
    fontSize: 17,
    fontWeight: '700',
  },
  ArticleDetailScreenHeaderSpacerHorizon: {
    flex: 1,
  },
  ArticleDetailScreenShareButtonAnchor: {
    marginLeft: 4,
  },
  ArticleDetailScreenHeaderIconCompass: {
    height: 20,
    width: 20,
  },
  ArticleDetailScreenContentHarbor: {
    paddingBottom: 32,
    paddingHorizontal: 20,
    paddingTop: 54,
  },
  ArticleDetailScreenHeroReef: {
    alignItems: 'center',
    backgroundColor: colors.deepTeal,
    borderRadius: 16,
    height: 200,
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
  },
  ArticleDetailScreenHeroImageCurrent: {
    height: '100%',
    width: '100%',
  },
  ArticleDetailScreenHeroPlaceholderFathom: {
    backgroundColor: colors.teal,
    borderRadius: 20,
    height: 40,
    opacity: 0.28,
    width: 40,
  },
  ArticleDetailScreenBadgeRowHorizon: {
    marginTop: 14,
  },
  ArticleDetailScreenTitleLantern: {
    color: colors.gold,
    fontFamily: fonts.sansExtraBold,
    fontSize: fontSize.title + 2,
    fontWeight: '800',
    lineHeight: 33,
    marginTop: 10,
  },
  ArticleDetailScreenParagraphDriftwood: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.body,
    lineHeight: 24,
    marginTop: 14,
  },
  ArticleDetailScreenButtonWrapVoyage: {
    marginTop: 24,
  },
});

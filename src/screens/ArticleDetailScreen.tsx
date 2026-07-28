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
      source={require('../assets/hooka-marivo-guide-app-background.png')}
      resizeMode="cover"
      style={styles.ArticleDetailScreenRootChassis}
    >
      <ScrollView
        contentContainerStyle={styles.ArticleDetailScreenContentChassis}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.ArticleDetailScreenHeaderArt}>
          <Pressable hitSlop={8} onPress={closeOverlay}>
            <Text style={styles.ArticleDetailScreenBackArrowPortico}>←</Text>
          </Pressable>
          <Text style={styles.ArticleDetailScreenHeaderLabelFiligree}>
            Article
          </Text>
          <View style={styles.ArticleDetailScreenHeaderSpacerFiligree} />
          <Pressable hitSlop={8} onPress={() => toggleSaved(article.id)}>
            <Image
              source={
                saved
                  ? require('../assets/hooka-marivo-guide-icon-heart-filled.png')
                  : require('../assets/hooka-marivo-guide-icon-heart-outline.png')
              }
              resizeMode="contain"
              style={styles.ArticleDetailScreenHeaderIconSigil}
            />
          </Pressable>
          <Pressable
            hitSlop={8}
            style={styles.ArticleDetailScreenShareButtonPortico}
            onPress={() =>
              shareText(
                article.title,
                `${article.title}\n\n${article.paragraphs.join('\n\n')}`,
              )
            }
          >
            <Image
              source={require('../assets/hooka-marivo-guide-icon-share.png')}
              resizeMode="contain"
              style={styles.ArticleDetailScreenHeaderIconSigil}
            />
          </Pressable>
        </View>

        <View style={styles.ArticleDetailScreenHeroChassis}>
          {article.hero ? (
            <Image
              source={article.hero}
              resizeMode="cover"
              style={styles.ArticleDetailScreenHeroImageArt}
            />
          ) : null}
        </View>

        <View style={styles.ArticleDetailScreenBadgeRowFiligree}>
          <ArticleTagBadge label={article.period} />
        </View>

        <Text style={styles.ArticleDetailScreenTitleFiligree}>
          {article.title}
        </Text>

        {article.paragraphs.map((paragraph, index) => (
          <Text key={index} style={styles.ArticleDetailScreenParagraphFiligree}>
            {paragraph}
          </Text>
        ))}

        <View style={styles.ArticleDetailScreenButtonWrapPortico}>
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
  ArticleDetailScreenRootChassis: {
    flex: 1,
  },
  ArticleDetailScreenHeaderArt: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },

  ArticleDetailScreenBackArrowPortico: {
    color: colors.gold,
    fontSize: 22,
    padding: 6,
  },
  ArticleDetailScreenHeaderLabelFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansBold,
    fontSize: 17,
    fontWeight: '700',
  },

  ArticleDetailScreenHeaderSpacerFiligree: {
    flex: 1,
  },
  ArticleDetailScreenShareButtonPortico: {
    marginLeft: 4,
  },

  ArticleDetailScreenHeaderIconSigil: {
    height: 20,
    width: 20,
  },

  ArticleDetailScreenContentChassis: {
    paddingBottom: 32,
    paddingHorizontal: 20,
    paddingTop: 54,
  },
  ArticleDetailScreenHeroChassis: {
    alignItems: 'center',
    backgroundColor: colors.deepTeal,
    borderRadius: 16,
    height: 200,
    justifyContent: 'center',
    overflow: 'hidden',
    width: '100%',
  },

  ArticleDetailScreenHeroImageArt: {
    height: '100%',
    width: '100%',
  },
  ArticleDetailScreenBadgeRowFiligree: {
    marginTop: 14,
  },

  ArticleDetailScreenTitleFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansExtraBold,
    fontSize: fontSize.title + 2,
    fontWeight: '800',
    lineHeight: 33,
    marginTop: 10,
  },
  ArticleDetailScreenParagraphFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: fontSize.body,
    lineHeight: 24,
    marginTop: 14,
  },

  ArticleDetailScreenButtonWrapPortico: {
    marginTop: 24,
  },
});

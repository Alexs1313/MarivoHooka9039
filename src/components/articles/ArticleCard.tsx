import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '../../constants/theme';
import type { Article } from '../../data/articles';

import { shareText } from '../../utils/share';

import { ArticleTagBadge } from './ArticleTagBadge';

type ArticleCardProps = {
  article: Article;
  saved: boolean;
  onPress: () => void;
  onToggleSaved: () => void;
};

export function ArticleCard({
  article,
  saved,
  onPress,
  onToggleSaved,
}: ArticleCardProps) {
  return (
    <Pressable onPress={onPress} style={styles.ArticleCardFacetChassis}>
      <View style={styles.ArticleCardHeroChassis}>
        {article.hero ? (
          <Image
            source={article.hero}
            resizeMode="cover"
            style={styles.ArticleCardHeroImageArt}
          />
        ) : null}
      </View>

      <View style={styles.ArticleCardBodyChassis}>
        <ArticleTagBadge label={article.period} />

        <Text style={styles.ArticleCardTitleFiligree}>{article.title}</Text>

        <Text numberOfLines={2} style={styles.ArticleCardDescriptionFiligree}>
          {article.shortDescription}
        </Text>

        <View style={styles.ArticleCardActionsRowFiligree}>
          <Pressable hitSlop={8} onPress={onToggleSaved}>
            <Image
              source={
                saved
                  ? require('../../assets/hooka-marivo-guide-icon-heart-filled.png')
                  : require('../../assets/hooka-marivo-guide-icon-heart-outline.png')
              }
              resizeMode="contain"
              style={styles.ArticleCardActionIconSigil}
            />
          </Pressable>
          <Pressable
            hitSlop={8}
            onPress={() =>
              shareText(
                article.title,
                `${article.title}\n\n${article.shortDescription}`,
              )
            }
          >
            <Image
              source={require('../../assets/hooka-marivo-guide-icon-share.png')}
              resizeMode="contain"
              style={styles.ArticleCardActionIconSigil}
            />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  ArticleCardFacetChassis: {
    backgroundColor: colors.deepTeal,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.28,
    shadowRadius: 14,
    elevation: 6,
    width: '100%',
  },

  ArticleCardHeroChassis: {
    alignItems: 'center',
    backgroundColor: colors.deepTeal,
    height: 140,
    justifyContent: 'center',
    width: '100%',
  },
  ArticleCardHeroImageArt: {
    height: '100%',
    width: '100%',
  },
  ArticleCardBodyChassis: {
    padding: 14,
  },

  ArticleCardTitleFiligree: {
    color: colors.gold,
    fontFamily: fonts.sansBold,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 5,
  },
  ArticleCardDescriptionFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    lineHeight: 19.5,
    marginTop: 5,
    opacity: 0.78,
  },

  ArticleCardActionsRowFiligree: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'flex-end',
    marginTop: 12,
  },

  ArticleCardActionIconSigil: {
    height: 18,
    width: 18,
  },
});

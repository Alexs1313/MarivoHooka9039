import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import {colors, fonts} from '../../constants/theme';
import type {Article} from '../../data/articles';
import {shareText} from '../../utils/share';
import {ArticleTagBadge} from './ArticleTagBadge';

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
    <Pressable onPress={onPress} style={styles.ArticleCardHullReef}>
      <View style={styles.ArticleCardPlaceholderCurrent}>
        {article.hero ? (
          <Image
            source={article.hero}
            resizeMode="cover"
            style={styles.ArticleCardHeroImageCurrent}
          />
        ) : (
          <View style={styles.ArticleCardPlaceholderDotFathom} />
        )}
      </View>

      <View style={styles.ArticleCardBodyHarbor}>
        <ArticleTagBadge label={article.period} />

        <Text style={styles.ArticleCardTitleLantern}>{article.title}</Text>

        <Text numberOfLines={2} style={styles.ArticleCardDescriptionDriftwood}>
          {article.shortDescription}
        </Text>

        <View style={styles.ArticleCardActionsRowHorizon}>
          <Pressable hitSlop={8} onPress={onToggleSaved}>
            <Image
              source={
                saved
                  ? require('../../assets/marivo_icon_heart_filled.png')
                  : require('../../assets/marivo_icon_heart_outline.png')
              }
              resizeMode="contain"
              style={styles.ArticleCardActionIconCompass}
            />
          </Pressable>
          <Pressable
            hitSlop={8}
            onPress={() =>
              shareText(article.title, `${article.title}\n\n${article.shortDescription}`)
            }>
            <Image
              source={require('../../assets/marivo_icon_share.png')}
              resizeMode="contain"
              style={styles.ArticleCardActionIconCompass}
            />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  ArticleCardHullReef: {
    backgroundColor: colors.deepTeal,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.28,
    shadowRadius: 14,
    elevation: 6,
    width: '100%',
  },
  ArticleCardPlaceholderCurrent: {
    alignItems: 'center',
    backgroundColor: colors.deepTeal,
    height: 140,
    justifyContent: 'center',
    width: '100%',
  },
  ArticleCardHeroImageCurrent: {
    height: '100%',
    width: '100%',
  },
  ArticleCardPlaceholderDotFathom: {
    backgroundColor: colors.teal,
    borderRadius: 20,
    height: 40,
    opacity: 0.28,
    width: 40,
  },
  ArticleCardBodyHarbor: {
    padding: 14,
  },
  ArticleCardTitleLantern: {
    color: colors.gold,
    fontFamily: fonts.sansBold,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 5,
  },
  ArticleCardDescriptionDriftwood: {
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 13,
    lineHeight: 19.5,
    marginTop: 5,
    opacity: 0.78,
  },
  ArticleCardActionsRowHorizon: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'flex-end',
    marginTop: 12,
  },
  ArticleCardActionIconCompass: {
    height: 18,
    width: 18,
  },
});

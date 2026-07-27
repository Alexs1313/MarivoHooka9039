import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, fonts } from '../../constants/theme';
import type { QuickFact } from '../../data/facts';
import { shareText } from '../../utils/share';

type FactCardProps = {
  fact: QuickFact;
  variant: 'green' | 'orange';
};

export function FactCard({ fact, variant }: FactCardProps) {
  return (
    <View
      style={[
        styles.FactCardFacetChassis,
        variant === 'green'
          ? styles.FactCardFacetGreenPortico
          : styles.FactCardFacetOrangePortico,
      ]}
    >
      <Text style={styles.FactCardTitleFiligree}>{fact.title}</Text>
      <Text style={styles.FactCardBodyFiligree}>{fact.body}</Text>
      <View style={styles.FactCardActionsRowFiligree}>
        <Pressable
          hitSlop={8}
          onPress={() => shareText(fact.title, `${fact.title}\n\n${fact.body}`)}
        >
          <Image
            source={require('../../assets/hooka-marivo-guide-icon-share.png')}
            resizeMode="contain"
            style={styles.FactCardShareIconSigil}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  FactCardFacetChassis: {
    borderRadius: 20,
    padding: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
    width: '100%',
  },

  FactCardFacetGreenPortico: {
    backgroundColor: colors.green,
  },
  FactCardFacetOrangePortico: {
    backgroundColor: colors.orange,
  },

  FactCardTitleFiligree: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 17,
    fontWeight: '700',
  },
  FactCardBodyFiligree: {
    color: colors.white,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
    opacity: 0.92,
  },

  FactCardActionsRowFiligree: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
  },
  FactCardShareIconSigil: {
    height: 18,
    tintColor: colors.white,
    width: 18,
  },
});

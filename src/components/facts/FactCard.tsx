import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

import {colors, fonts} from '../../constants/theme';
import type {QuickFact} from '../../data/facts';
import {shareText} from '../../utils/share';

type FactCardProps = {
  fact: QuickFact;
  variant: 'green' | 'orange';
};

export function FactCard({fact, variant}: FactCardProps) {
  return (
    <View
      style={[
        styles.FactCardHullReef,
        variant === 'green'
          ? styles.FactCardHullGreenVoyage
          : styles.FactCardHullOrangeVoyage,
      ]}>
      <Text style={styles.FactCardTitleLantern}>{fact.title}</Text>
      <Text style={styles.FactCardBodyDriftwood}>{fact.body}</Text>
      <View style={styles.FactCardActionsRowHorizon}>
        <Pressable hitSlop={8} onPress={() => shareText(fact.title, `${fact.title}\n\n${fact.body}`)}>
          <Image
            source={require('../../assets/marivo_icon_share.png')}
            resizeMode="contain"
            style={styles.FactCardShareIconCompass}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  FactCardHullReef: {
    borderRadius: 20,
    padding: 20,
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 4,
    width: '100%',
  },
  FactCardHullGreenVoyage: {
    backgroundColor: colors.green,
  },
  FactCardHullOrangeVoyage: {
    backgroundColor: colors.orange,
  },
  FactCardTitleLantern: {
    color: colors.cream,
    fontFamily: fonts.sansBold,
    fontSize: 17,
    fontWeight: '700',
  },
  FactCardBodyDriftwood: {
    color: colors.white,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 8,
    opacity: 0.92,
  },
  FactCardActionsRowHorizon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 12,
  },
  FactCardShareIconCompass: {
    height: 18,
    tintColor: colors.white,
    width: 18,
  },
});

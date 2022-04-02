/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {COLORS, SIZES, SHADOWS, assets} from '../constants';
import {HeartButton} from '../components';
import {SubInfo} from './SubInfo';

const NFTCard = ({data}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS,
      }}>
      <View style={{width: '100%', height: 250}}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <HeartButton imgUrl={assets.heart} top={10} right={30} />
        <SubInfo />
      </View>
    </View>
  );
};

export default NFTCard;

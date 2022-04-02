/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {COLORS, SIZES, SHADOWS, assets} from '../constants';
import {HeartButton, RectButton} from '../components';
import {EthPrice, NFTTitle, SubInfo} from './SubInfo';

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
      <View style={{width: '100%', height: 370}}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '65%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <HeartButton imgUrl={assets.heart} top={10} right={30} />
        <SubInfo />
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            marginVertical: 4,
          }}>
          <NFTTitle
            title={data.name}
            subTitle={data.creator}
            titleSize={SIZES.large}
            subTitleSize={SIZES.small}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate('Details', {data})}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;

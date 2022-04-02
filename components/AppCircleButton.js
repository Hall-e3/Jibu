/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Text, TouchableOpacity, Image} from 'react-native';
import {COLORS, FONTS, SHADOWS, SIZES} from '../constants';

export const HeartButton = props => {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        height: 30,
        width: 30,
        borderRadius: SIZES.extraLarge,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS,
        ...props,
      }}
      onPress={props.onPress}>
      <Image
        source={props.imgUrl}
        style={{height: '80%', width: '80%'}}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export const RectButton = ({minWidth, fontSize, handlePress, ...props}) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: SIZES.extraLarge,
        backgroundColor: COLORS.primary,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
      }}
      onPress={handlePress}>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          textAlign: 'center',
          fontSize: fontSize,
          color: COLORS.white,
        }}>
        Place a Bid
      </Text>
    </TouchableOpacity>
  );
};

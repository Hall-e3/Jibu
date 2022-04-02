/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Text, TouchableOpacity, Image} from 'react-native';
import {COLORS, SHADOWS, SIZES} from '../constants';

export const HeartButton = props => {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        height: 30,
        width: 30,
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS,
        ...props,
      }}>
      <Image
        source={props.imgUrl}
        style={{height: '100%', width: '100%'}}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export const RectButton = () => {
  return <Text>Rect Button</Text>;
};

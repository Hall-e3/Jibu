/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {SIZES, assets, COLORS, SHADOWS, FONTS} from '../constants';

export const NFTTitle = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  );
};

export const EthPrice = () => {
  return (
    <View>
      <Text>SubInfo</Text>
    </View>
  );
};

export const ImageCmp = props => {
  return (
    <View style={{...props}}>
      <Image
        source={props.imgUrl}
        resizeMode="contain"
        style={{
          height: 40,
          width: 40,
          marginLeft: props.index === 0 ? 0 : -SIZES.font,
        }}
      />
    </View>
  );
};

export const People = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      {[assets.person01, assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp
            key={`People-${index}`}
            imgUrl={imgUrl}
            height={25}
            width={25}
            index={index}
          />
        ),
      )}
    </View>
  );
};

export const EndDate = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
        // maxHeight: '50%',
        ...SHADOWS.light,
      }}>
      <Text
        style={{
          fontSize: SIZES.small,
          COLOR: COLORS.primary,
          fontFamily: FONTS.regular,
        }}>
        Ending
      </Text>
      <Text
        style={{
          fontSize: SIZES.medium,
          COLOR: COLORS.primary,
          fontFamily: FONTS.semiBold,
        }}>
        2:30pm
      </Text>
    </View>
  );
};

export const SubInfo = () => {
  return (
    <View
      style={{
        marginHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <People />
      <EndDate />
    </View>
  );
};

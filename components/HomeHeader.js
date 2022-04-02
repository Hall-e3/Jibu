/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';

import {COLORS, assets, FONTS, SIZES} from '../constants';

const HomeHeader = ({handleSearch}) => {
  return (
    <View style={{backgroundColor: COLORS.primary, padding: SIZES.font}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Image
          source={assets.logo}
          style={{height: 25, width: 90}}
          resizeMode="contain"
        />
        <View style={{width: 40, height: 40}}>
          <Image
            source={assets.person03}
            style={{width: '100%', height: '100%'}}
          />
          <Image
            source={assets.badge}
            style={{
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
              position: 'absolute',
            }}
          />
        </View>
      </View>

      <View style={{marginTop: SIZES.font}}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}>
          Hello, Victoria 👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}>
          Let's find a master piece
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: COLORS.secondary,
          borderRadius: SIZES.font,
          marginTop: SIZES.font,
          alignItems: 'center',
        }}>
        <Image
          source={assets.search}
          resizeMode="contain"
          style={{width: 20, height: 20, marginHorizontal: 10}}
        />
        <TextInput
          placeholder="Search NFTS"
          style={{color: COLORS.white, flex: 1}}
          onChangeText={handleSearch}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

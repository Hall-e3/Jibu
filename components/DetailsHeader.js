/* eslint-disable react-native/no-inline-styles */
import {View, TouchableOpacity, Image, StatusBar} from 'react-native';
import React from 'react';

const DetailsHeader = ({data, navigation, icon, IconFavorite}) => {
  return (
    <View style={{width: '100%', height: 373, zIndex: -1}}>
      <Image
        source={data.image}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}
      />
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          marginTop: StatusBar.currentHeight,
          marginHorizontal: 10,
        }}>
        <CircleButton Icon={icon} navigation={navigation} />
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          marginTop: StatusBar.currentHeight,
          right: 40,
        }}>
        {IconFavorite}
      </View>
    </View>
  );
};

const CircleButton = ({Icon, navigation}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#fff',
        position: 'absolute',
        zIndex: 1,
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
      }}
      onPress={() => navigation.goBack()}>
      <Image
        source={Icon}
        style={{width: 20, height: 20}}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default DetailsHeader;

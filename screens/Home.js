/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Text, SafeAreaView, View, FlatList} from 'react-native';

import {COLORS, NFTData} from '../constants';
import {HomeHeader, FocusedStatusBar, NFTCard} from '../components';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar background={COLORS.primary} />
      <NFTDataList />
    </SafeAreaView>
  );
};

const NFTDataList = () => (
  <View style={{flex: 1}}>
    {/* it's appearing ontop, send text in front */}
    <View style={{zIndex: 1}}>
      <FlatList
        data={NFTData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <NFTCard data={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HomeHeader />}
      />
    </View>
    {/* send text back ward */}
    <View
      style={{
        position: 'absolute',
        right: 0,
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: -1,
      }}>
      <View backgroundColor={COLORS.primary} style={{height: 300}} />
      <View backgroundColor={COLORS.white} style={{flex: 1}} />
    </View>
  </View>
);
export default Home;

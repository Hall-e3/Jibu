/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {SafeAreaView, View, FlatList} from 'react-native';

import {COLORS, NFTData} from '../constants';
import {HomeHeader, FocusedStatusBar, NFTCard} from '../components';

const Home = () => {
  const [nftData, setNftData] = React.useState(NFTData);
  const [text, setText] = React.useState('');
  console.log(text);
  console.log(nftData);

  const handleSearch = text => {
    if (!text.length) return setNftData(NFTData);
    const filteredData = NFTData.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    if (filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar background={COLORS.primary} />
      <NFTDataList
        data={nftData}
        handleSearch={handleSearch}
        setText={setText}
      />
    </SafeAreaView>
  );
};

const NFTDataList = ({data, handleSearch, setText}) => (
  <View style={{flex: 1}}>
    {/* it's appearing ontop, send text in front */}
    <View style={{zIndex: 1}}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <NFTCard data={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <HomeHeader onSearch={handleSearch} setText={setText} />
        }
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

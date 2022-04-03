/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';

import {COLORS, FONTS, SIZES, assets, SHADOWS} from '../constants';
import {
  SubInfo,
  CircleButton,
  RectButton,
  FocusedStatusBar,
  DetailBid,
  DetailDesc,
  DetailsHeader,
  HeartButton,
} from '../components';

const Details = ({route, navigation}) => {
  const {
    params: {data},
  } = route;
  console.log(data);
  const handlePress = () => {
    console.log('Place a Bid');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <FocusedStatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          zIndex: 1,
        }}>
        <RectButton
          minWidth={170}
          fontSize={SIZES.Large}
          handlePress={handlePress}
          {...SHADOWS.dark}
        />
      </View>
      <FlatList
        data={data.bids}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <DetailBid bid={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: SIZES.extraLarge * 3}}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader
              data={data}
              navigation={navigation}
              icon={assets.left}
              IconFavorite={<HeartButton imgUrl={assets.heart} />}
            />
            <SubInfo />
            <View style={{padding: 15}}>
              <DetailDesc data={data} />
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontFamily: FONTS.semiBold,
                    fontSize: SIZES.large,
                    color: COLORS.primary,
                  }}>
                  Current Bid
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;

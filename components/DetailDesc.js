/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React, {Fragment} from 'react';

import {COLORS, assets, FONTS, SIZES} from '../constants';
import {EthPrice, NFTTitle, EndDate} from './SubInfo';

const DetailDesc = ({data}) => {
  const [text, setText] = React.useState(data.description.slice(0, 150));
  const [readMore, setReadMore] = React.useState(false);
  return (
    <Fragment>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>

      <View style={{marginVertical: SIZES.font}}>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.large,
            color: COLORS.primary,
          }}>
          Description
        </Text>
        <View style={{marginVertical: SIZES.base}}>
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.font,
              color: COLORS.secondary,
              lineHeight: 20,
            }}>
            {text}
            {!readMore && <Text>....</Text>}
            <Text
              onPress={() => {
                if (!readMore) {
                  setText(data.description);
                  setReadMore(true);
                } else {
                  setText(data.description.slice(0, 100));
                  setReadMore(false);
                }
              }}
              style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.font,
                color: COLORS.primary,
              }}>
              {readMore ? 'Show Less' : 'Read More'}
            </Text>
          </Text>
        </View>
      </View>
    </Fragment>
  );
};

export default DetailDesc;

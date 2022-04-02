import React from 'react';

import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/core';

const FocusedStatusBar = ({background, ...props}) => {
  const isFocused = useIsFocused();
  return isFocused ? (
    <StatusBar animated={true} backgroundColor={background} {...props} />
  ) : null;
};

export default FocusedStatusBar;

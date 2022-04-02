import React from 'react';
import {View} from 'react-native';
import {
  getMarginHorizontalStyle,
  getMarginVerticalStyle,
  getPaddingHorizontalStyle,
  getPaddingVerticalStyle,
} from './common';

interface Props {
  style?: any;
  marginHorizontal?: number;
  marginVertical?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  children?: React.ReactNode;
  Gutter?: number;
  Col?: number;
  height?: number | string;
  width?: number | string;
  testBorder?: boolean;
}

function BorderView({
  children,
  style,
  marginHorizontal,
  marginVertical,
  paddingHorizontal,
  paddingVertical,
  height = '100%',
  width = '100%',
}: Props) {
  return (
    <View
      style={[
        {width, height, ...style},
        {...getMarginHorizontalStyle(marginHorizontal)},
        {...getMarginVerticalStyle(marginVertical)},
        {...getPaddingVerticalStyle(paddingVertical)},
        {...getPaddingHorizontalStyle(paddingHorizontal)},
      ]}>
      {children}
    </View>
  );
}

export default BorderView;

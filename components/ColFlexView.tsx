import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  getMarginHorizontalStyle,
  getMarginVerticalStyle,
  getPaddingHorizontalStyle,
  getPaddingVerticalStyle,
  getFlexSetStyle,
} from './common';

interface Props {
  style?: any;
  marginHorizontal?: number;
  marginVertical?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  flexWrap?: string;
  flexSet?: string[];
  children?: React.ReactNode;
}

function ColFlexView({
  children,
  style,
  marginHorizontal,
  marginVertical,
  paddingHorizontal,
  paddingVertical,
  flexWrap,
  flexSet = [],
}: Props) {
  return (
    <View
      style={[
        styles.columnFlexView,
        {...getFlexSetStyle(flexSet)},
        {...getMarginHorizontalStyle(marginHorizontal)},
        {...getMarginVerticalStyle(marginVertical)},
        {...getPaddingVerticalStyle(paddingVertical)},
        {...getPaddingHorizontalStyle(paddingHorizontal)},
        {flexWrap, ...style},
      ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  columnFlexView: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
});

export default ColFlexView;

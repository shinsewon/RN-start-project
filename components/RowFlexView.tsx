import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FlexSet, AlignItems, FlexWrap} from './types';
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
  flexWrap?: FlexWrap;
  flexSet?: [FlexSet?, AlignItems?, FlexSet?];
  children?: React.ReactNode;
}

function RowFlexView({
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
        styles.rowFlexView,
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
  rowFlexView: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
});

export default RowFlexView;

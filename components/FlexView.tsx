import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FlexSet, AlignItems, FlexWrap, FlexDirection} from './types';
import {
  getMarginHorizontalStyle,
  getMarginVerticalStyle,
  getPaddingHorizontalStyle,
  getPaddingVerticalStyle,
  getFlexSetStyle,
} from './common';

interface Props {
  flexDirection?: FlexDirection;
  style?: any;
  marginHorizontal?: number;
  marginVertical?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  flexWrap?: FlexWrap;
  flexSet?: [FlexSet?, AlignItems?, FlexSet?];
  children?: React.ReactNode;
  testBorder?: boolean;
}

function FlexView({
  flexDirection = 'row',
  children,
  style,
  marginHorizontal,
  marginVertical,
  paddingHorizontal,
  paddingVertical,
  flexWrap,
  flexSet = [],
  testBorder = false,
}: Props) {
  return (
    <View
      style={[
        styles.flexView,
        {...getFlexSetStyle(flexSet)},
        {...getMarginHorizontalStyle(marginHorizontal)},
        {...getMarginVerticalStyle(marginVertical)},
        {...getPaddingVerticalStyle(paddingVertical)},
        {...getPaddingHorizontalStyle(paddingHorizontal)},
        {flexDirection, flexWrap, ...style},
        testBorder && {borderWidth: 1, borderColor: 'red'},
      ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  flexView: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
});

export default FlexView;

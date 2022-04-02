import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useGetColumnGutter} from '../hooks';
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

function SizedComponent({
  children,
  style,
  marginHorizontal,
  marginVertical,
  paddingHorizontal,
  paddingVertical,
  Gutter = 0,
  Col = 0,
  height = '100%',
  width = '100%',
  testBorder = false,
}: Props) {
  const {colWidth, gutter} = useGetColumnGutter();
  let componentWidth = null;
  if (Gutter === 0 && Col === 0) {
    componentWidth = width;
  } else {
    componentWidth = Math.floor(Gutter * gutter + Col * colWidth);
  }

  return (
    <View
      style={[
        // styles.sizeComponent,
        {width: componentWidth, height},
        {...style},
        {...getMarginHorizontalStyle(marginHorizontal)},
        {...getMarginVerticalStyle(marginVertical)},
        {...getPaddingVerticalStyle(paddingVertical)},
        {...getPaddingHorizontalStyle(paddingHorizontal)},
        testBorder && {borderWidth: 1, borderColor: 'red'},
      ]}>
      {children}
    </View>
  );
}

export default SizedComponent;

const styles = StyleSheet.create({
  // sizeComponent: {
  //   boxSizing: 'borderBox',
  // },
});

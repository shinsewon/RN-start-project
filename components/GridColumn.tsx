import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useGetColumnGutter} from '../hooks';

function GridColumn({top = 0}) {
  const {colNumber, colWidth, width} = useGetColumnGutter();

  return (
    <View style={[styles.Box, {top}]}>
      <View style={styles.Container}>
        <View style={[styles.Row, {width}]}>
          {colNumber.map(col => (
            <View key={col} style={[styles.Col, {width: colWidth}]} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  Container: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    zIndex: 9,
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Col: {
    borderColor: '#f9dae5',
    borderWidth: 1,
    backgroundColor: '#f9dae5',
  },
});

export default GridColumn;

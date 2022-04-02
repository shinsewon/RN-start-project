import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import GridColumn from './components/GridColumn';
import MainScreen from './screens/MainScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GridColumn />
      <MainScreen />
    </SafeAreaView>
  );
};

export default App;

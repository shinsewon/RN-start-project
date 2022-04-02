import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FlexView from '../components/FlexView';
import SizedComponent from '../components/SizedComponent';
import Header from '../components/main/Header';
import Sider from '../components/main/Sider';
import Content from '../components/main/Content';
import Footer from '../components/main/Footer';

function MainScreen() {
  return (
    <FlexView flexDirection="column">
      <Header />
      <SizedComponent Col={12} Gutter={11} height={500} marginHorizontal={0}>
        <FlexView>
          <Sider />
          <Content />
        </FlexView>
      </SizedComponent>
      <Footer />
    </FlexView>
  );
}

export default MainScreen;

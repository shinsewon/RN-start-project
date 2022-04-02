import React from 'react';
import FlexView from '../FlexView';
import SizedComponent from '../SizedComponent';
import TextComponent from '../TextComponent';

function Sider() {
  return (
    <SizedComponent Col={4} Gutter={3} style={{backgroundColor: 'blue', opacity: 0.8}}>
      <FlexView flexSet={['center', 'center']}>
        <TextComponent color="#fff">Sider</TextComponent>
      </FlexView>
    </SizedComponent>
  );
}

export default Sider;

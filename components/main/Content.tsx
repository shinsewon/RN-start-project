import React from 'react';
import FlexView from '../FlexView';
import SizedComponent from '../SizedComponent';
import TextComponent from '../TextComponent';

function Content() {
  return (
    <SizedComponent style={{backgroundColor: '#45aaf2', opacity: 0.8, flex: 1}}>
      <FlexView flexSet={['center', 'center']}>
        <TextComponent color="#fff">Content</TextComponent>
      </FlexView>
    </SizedComponent>
  );
}

export default Content;

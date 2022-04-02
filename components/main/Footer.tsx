import React from 'react';
import FlexView from '../FlexView';
import SizedComponent from '../SizedComponent';
import TextComponent from '../TextComponent';

function Footer() {
  return (
    <FlexView style={{height: 40, backgroundColor: '#4b6584', opacity: 0.8}}>
      <SizedComponent marginHorizontal={0} Col={4} Gutter={3} testBorder>
        <FlexView flexSet={['center', 'center']} testBorder>
          <TextComponent>Footer</TextComponent>
        </FlexView>
      </SizedComponent>
    </FlexView>
  );
}

export default Footer;

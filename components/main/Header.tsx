import React from 'react';
import FlexView from '../FlexView';
import SizedComponent from '../SizedComponent';
import TextComponent from '../TextComponent';

function Header() {
  return (
    <FlexView style={{height: 40, backgroundColor: 'skyblue', opacity: 0.5}}>
      <SizedComponent marginHorizontal={0} Col={12} Gutter={11}>
        <FlexView flexSet={['space-between']}>
          <SizedComponent Col={4} Gutter={3} testBorder>
            <FlexView flexSet={['center', 'center']}>
              <TextComponent>아이콘</TextComponent>
            </FlexView>
          </SizedComponent>
          <SizedComponent Col={2} Gutter={1} testBorder>
            <FlexView flexSet={['center', 'center']}>
              <TextComponent>메뉴</TextComponent>
            </FlexView>
          </SizedComponent>
        </FlexView>
      </SizedComponent>
    </FlexView>
  );
}

export default Header;

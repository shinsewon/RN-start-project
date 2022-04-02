import React from 'react';
import {Text} from 'react-native';

interface Props {
  style?: any;
  fontSize?: number;
  fontWeight?: number | string;
  lineHeight?: number;
  color?: string;
  children: React.ReactNode;
}

function TextComponent({
  children,
  style,
  fontSize = 12,
  fontWeight,
  lineHeight,
  color = '#1B1B21',
}: Props) {
  return <Text style={[{fontSize, fontWeight, lineHeight, color, ...style}]}>{children}</Text>;
}

export default TextComponent;

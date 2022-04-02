export interface MarginHorizontalProps {
  marginLeft?: string;
  marginRight?: string;
  marginHorizontal?: number;
}

export interface MarginVerticalProps {
  marginVertical?: number;
}

export interface PaddingHorizontalProps {
  paddingLeft?: string;
  paddingRight?: string;
  paddingHorizontal?: number;
}

export interface PaddingVerticalProps {
  paddingVertical?: number;
}

export interface FlexSetProps {
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
}

export type FlexSet =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-around'
  | 'space-between'
  | 'space-evenly';

export type AlignItems = 'center' | 'baseline' | 'flex-end' | 'flex-start' | 'stretch';

export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

import React, { Ref, forwardRef } from 'react';
import {
  View,
  ViewProps,
  FlexAlignType,
  StyleSheet,
  DimensionValue,
} from 'react-native';

export type FlexComponentProps = ViewProps & {
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around';
  alignItems?: FlexAlignType;
  alignSelf?: 'auto' | FlexAlignType;
  flex?: number;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexGrow?: number;
  flexShrink?: number;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  backgroundColor?: string;

  position?: 'absolute' | 'relative';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  opacity?: number;

  height?: DimensionValue;
  width?: DimensionValue;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  margin?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;

  p?: number;
  ph?: number;
  pv?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  m?: number;
  mh?: number;
  mv?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;

  borderWidth?: number;
  borderRadius?: number;
  borderColor?: string;

  gap?: number;
};

const Flex = forwardRef<View, FlexComponentProps>(
  ({ ...props }, ref?: Ref<View>) => {
    const { style: baseStyle } = getStyle(props);

    return <View {...props} ref={ref} style={[baseStyle, props.style]} />;
  },
);

const getStyle = (props: FlexComponentProps) =>
  StyleSheet.create({
    style: { ...props },
  });

export default Flex;

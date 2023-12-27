import * as React from 'react';
import Svg, { Circle } from 'react-native-svg';

import { IconProps } from './types';

function IconMore({ fill, height, width, ...props }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 4 16"
      fill="none"
      {...props}>
      <Circle cx={2} cy={2} r={2} fill={fill} />
      <Circle cx={2} cy={8} r={2} fill={fill} />
      <Circle cx={2} cy={14} r={2} fill={fill} />
    </Svg>
  );
}

export default IconMore;

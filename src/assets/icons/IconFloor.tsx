import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import { IconProps } from './types';

function IconFloor({ fill, height, width, ...props }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <G clipPath="url(#prefix__clip0_151_12)">
        <Path d="M16 6h-5v5H6v5H1v7h22V1h-7v5z" stroke={fill} strokeWidth={2} />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_151_12">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default IconFloor;

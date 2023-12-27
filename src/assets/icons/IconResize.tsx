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
      <G clipPath="url(#prefix__clip0_151_10)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.666-.12a1.214 1.214 0 011.214 1.213V11.88a1.214 1.214 0 11-2.427 0V4.022L4.022 21.453h7.858a1.214 1.214 0 010 2.427H1.093A1.213 1.213 0 01-.12 22.667V11.88a1.214 1.214 0 012.427 0v7.858L19.738 2.307H11.88a1.214 1.214 0 010-2.427h10.786z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_151_10">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default IconFloor;

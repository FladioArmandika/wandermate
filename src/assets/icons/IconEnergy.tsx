import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

function IconEnergy({ fill, height, width, ...props }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M14 2a1 1 0 00-1.864-.504l-7 12A1 1 0 006 15h4v7a1 1 0 001.864.504l7-12A1 1 0 0018 9h-4V2z"
        fill={fill}
      />
    </Svg>
  );
}

export default IconEnergy;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

function IconProgress({ fill, height, width, ...props }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M24 2.099A1.999 1.999 0 0022.001.1L6.009 0a1.999 1.999 0 000 3.998h11.114L.591 20.57a1.999 1.999 0 000 2.839 1.999 1.999 0 002.839 0L20.002 6.837V17.99a1.999 1.999 0 103.998 0V2.1z"
        fill={fill}
      />
    </Svg>
  );
}

export default IconProgress;

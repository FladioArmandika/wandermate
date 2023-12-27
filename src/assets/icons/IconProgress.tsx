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
        d="M12 16.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM12 9a3 3 0 100 6 3 3 0 000-6z"
        fill={fill}
      />
      <Path
        d="M12 19.5A7.512 7.512 0 016.41 17l1.118-1A6 6 0 1012 6V4.5a7.5 7.5 0 010 15z"
        fill={fill}
      />
      <Path
        d="M12 22.5A10.5 10.5 0 1122.5 12 10.512 10.512 0 0112 22.5zM12 3a9 9 0 109 9 9.01 9.01 0 00-9-9z"
        fill={fill}
      />
    </Svg>
  );
}

export default IconProgress;

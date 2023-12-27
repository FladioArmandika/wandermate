import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

function IconNotification({ fill, height, width, ...props }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1a2 2 0 00-1.98 2.284A7.003 7.003 0 005 10v8H4a1 1 0 000 2h16a1 1 0 000-2h-1v-8a7.003 7.003 0 00-5.02-6.716A2 2 0 0012 1zm2 21a1 1 0 01-1 1h-2a1 1 0 010-2h2a1 1 0 011 1z"
        fill={fill}
      />
    </Svg>
  );
}

export default IconNotification;

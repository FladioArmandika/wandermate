import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

function IconUser({ fill, height, width, ...props }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M23.877 23.52a.943.943 0 01-.338.352.897.897 0 01-.462.128H.922a.897.897 0 01-.461-.129.942.942 0 01-.338-.351.99.99 0 010-.96c1.758-3.159 4.466-5.424 7.627-6.498a8.555 8.555 0 01-3.457-4.197 8.962 8.962 0 01-.304-5.518 8.66 8.66 0 012.975-4.58A8.103 8.103 0 0112 0c1.82 0 3.588.621 5.035 1.768a8.66 8.66 0 012.975 4.58 8.962 8.962 0 01-.303 5.517 8.555 8.555 0 01-3.457 4.197c3.16 1.074 5.868 3.339 7.626 6.498a.99.99 0 010 .96z"
        fill={fill}
      />
    </Svg>
  );
}

export default IconUser;

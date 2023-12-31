import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

function IconTimer({ fill, height, width, ...props }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M9 3V1h6v2H9zm2 11h2V8h-2v6zm1 8a8.645 8.645 0 01-3.488-.713A9.194 9.194 0 015.65 19.35a9.199 9.199 0 01-1.938-2.863A8.63 8.63 0 013 13c0-1.233.238-2.396.713-3.488A9.195 9.195 0 015.65 6.65a9.198 9.198 0 012.863-1.938A8.63 8.63 0 0112 4a8.92 8.92 0 012.975.5c.95.333 1.842.817 2.675 1.45l1.4-1.4 1.4 1.4-1.4 1.4a9.723 9.723 0 011.45 2.675c.333.95.5 1.942.5 2.975a8.645 8.645 0 01-.713 3.488 9.194 9.194 0 01-1.937 2.862 9.198 9.198 0 01-2.863 1.938A8.63 8.63 0 0112 22zm0-2c1.933 0 3.583-.683 4.95-2.05C18.317 16.583 19 14.933 19 13c0-1.933-.683-3.583-2.05-4.95C15.583 6.683 13.933 6 12 6c-1.933 0-3.583.683-4.95 2.05C5.683 9.417 5 11.067 5 13c0 1.933.683 3.583 2.05 4.95C8.417 19.317 10.067 20 12 20z"
        fill={fill}
      />
    </Svg>
  );
}

export default IconTimer;

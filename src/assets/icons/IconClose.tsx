import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

function IconClose({ fill, height, width, ...props }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.839.146L8.004 7.44 15.171.146a.485.485 0 01.695 0 .506.506 0 010 .708L8.7 8.146l7.167 7.293a.506.506 0 010 .707.485.485 0 01-.695 0L8.004 8.853.84 16.146a.485.485 0 01-.695 0 .506.506 0 010-.707L7.31 8.146.144.854a.506.506 0 010-.708.485.485 0 01.695 0z"
        stroke={fill}
      />
    </Svg>
  );
}

export default IconClose;

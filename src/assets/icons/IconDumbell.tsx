import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

function IconDumbell({ fill, height, width, ...props }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M3.6 2.4c0-.664.536-1.2 1.2-1.2H6c.664 0 1.2.536 1.2 1.2v14.4c0 .664-.536 1.2-1.2 1.2H4.8c-.664 0-1.2-.536-1.2-1.2v-2.4H2.4c-.664 0-1.2-.536-1.2-1.2v-2.4c-.664 0-1.2-.536-1.2-1.2 0-.664.536-1.2 1.2-1.2V6c0-.664.536-1.2 1.2-1.2h1.2V2.4zm16.8 0v2.4h1.2c.664 0 1.2.536 1.2 1.2v2.4c.664 0 1.2.536 1.2 1.2 0 .664-.536 1.2-1.2 1.2v2.4c0 .664-.536 1.2-1.2 1.2h-1.2v2.4c0 .664-.536 1.2-1.2 1.2H18c-.664 0-1.2-.536-1.2-1.2V2.4c0-.664.536-1.2 1.2-1.2h1.2c.664 0 1.2.536 1.2 1.2zm-4.8 6v2.4H8.4V8.4h7.2z"
        fill={fill}
      />
    </Svg>
  );
}

export default IconDumbell;

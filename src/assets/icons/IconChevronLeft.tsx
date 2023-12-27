import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

function IconChevronLeft({ fill, height, width, ...props }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M17.515.628a2.14 2.14 0 00-3.029 0l-9.858 9.858a2.14 2.14 0 000 3.029l9.858 9.858a2.14 2.14 0 003.656-1.514 2.141 2.141 0 00-.627-1.515L9.18 11.99l8.334-8.334a2.158 2.158 0 000-3.028z"
        fill={fill}
      />
    </Svg>
  );
}

export default IconChevronLeft;

import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

function IconSearch({ fill, height, width, ...props }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M19.6 21l-6.3-6.3A6.096 6.096 0 019.5 16c-1.817 0-3.354-.63-4.612-1.888C3.63 12.853 3.001 11.316 3 9.5c0-1.817.63-3.354 1.888-4.612C6.147 3.63 7.684 3.001 9.5 3c1.817 0 3.354.63 4.612 1.888C15.37 6.147 15.999 7.684 16 9.5a6.096 6.096 0 01-1.3 3.8l6.3 6.3-1.4 1.4zM9.5 14c1.25 0 2.313-.438 3.188-1.313S14.001 10.749 14 9.5c0-1.25-.438-2.313-1.313-3.188S10.749 4.999 9.5 5c-1.25 0-2.313.438-3.188 1.313S4.999 8.251 5 9.5c0 1.25.438 2.313 1.313 3.188S8.251 14.001 9.5 14z"
        fill={fill}
      />
    </Svg>
  );
}

export default IconSearch;

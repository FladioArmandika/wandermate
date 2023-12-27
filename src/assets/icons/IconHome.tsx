import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

function IconHome({ fill, height, width, ...props }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M24 22.719c0 .34-.14.665-.39.906-.25.24-.59.375-.943.375H1.333c-.353 0-.692-.135-.942-.375S0 23.059 0 22.719V9.253c0-.195.046-.388.135-.563.09-.176.22-.33.38-.449L11.18.27C11.415.095 11.704 0 12 0c.296 0 .585.095.819.27L23.485 8.24c.16.12.29.273.38.449.089.175.135.368.135.563V22.72z"
        fill={fill}
      />
    </Svg>
  );
}

export default IconHome;

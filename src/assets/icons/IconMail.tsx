import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

function IconMail({ fill, height, width, ...props }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 14"
      fill="none"
      {...props}>
      <Path
        d="M1.725 0h15.864a1.728 1.728 0 011.725 1.725v10.55A1.728 1.728 0 0117.588 14H1.725A1.728 1.728 0 010 12.275V1.725A1.728 1.728 0 011.725 0zm.44 1.136l7.012 6.053a.733.733 0 00.96 0l7.012-6.053H2.165zm16.012.608l-7.3 6.301a1.854 1.854 0 01-2.44 0l-7.301-6.3v10.53a.592.592 0 00.589.589h15.864a.592.592 0 00.588-.589V1.745z"
        fill={fill}
      />
    </Svg>
  );
}

export default IconMail;

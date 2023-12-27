import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

function IconUser({ fill, height, width, ...props }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.401 13.548C-3.794 5.355 1.266-2.842 5.065.957l.525.524c2.159 2.158 1.15 3.069-.171 4.694a.47.47 0 00-.058.522c1.225 2.447 3.446 4.667 5.894 5.892.337.17.549-.079.796-.28 1.521-1.245 2.403-1.966 4.421.052l.524.524c1.475 1.474 1.272 3.214-.261 4.254-.521.354-1.187.618-1.962.755-2.597.459-6.519-.494-10.372-4.346zM.941 3.388c-.442 2.355.427 5.942 4.053 9.567 3.627 3.626 7.255 4.534 9.634 4.114 1-.177 2.116-.677 2.446-1.581.217-.593.034-1.305-.67-2.01l-.525-.524c-1.615-1.615-2.3-.802-3.577.23a1.3 1.3 0 01-1.42.152c-2.618-1.31-4.958-3.65-6.268-6.266a1.3 1.3 0 01.153-1.42c1.03-1.275 1.844-1.962.23-3.576l-.525-.525C3.421.498 2.31.692 1.576 1.761c-.29.423-.513.975-.636 1.627z"
        stroke={fill}
      />
    </Svg>
  );
}

export default IconUser;
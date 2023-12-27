import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

function IconLock({ fill, height, width, ...props }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 23 23"
      fill="none"
      {...props}>
      <Path
        d="M6.22 9.062h.194V6.07C6.414 3.269 8.73 1 11.483 1c2.8 0 5.069 2.269 5.069 5.069v2.993h.241c1.207 0 2.22 1.014 2.22 2.22v8.497C19.014 20.986 18 22 16.794 22H6.221C5.014 22 4 20.986 4 19.78v-8.497c0-1.207 1.014-2.22 2.22-2.22zm1.304 0h7.966V6.07c0-2.172-1.787-3.959-4.007-3.959A3.977 3.977 0 007.524 6.07v2.993zm9.27 1.11H6.22c-.628 0-1.11.483-1.11 1.11v8.497c0 .628.482 1.11 1.11 1.11h10.572c.58 0 1.11-.482 1.11-1.11v-8.496c0-.628-.53-1.11-1.11-1.11z"
        fill={fill}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.483 13.504c.772 0 1.4.627 1.4 1.4 0 .53-.338.965-.773 1.206v1.449h-1.207V16.11c-.434-.241-.772-.675-.772-1.207 0-.772.628-1.4 1.352-1.4z"
        fill={fill}
      />
    </Svg>
  );
}

export default IconLock;

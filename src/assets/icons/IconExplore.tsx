import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { IconProps } from './types';

function IconExplore({ fill, height, width, ...props }: IconProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}>
      <Path
        d="M5.4 18.6l9-4.2 4.2-9-9 4.2-4.2 9zm6.6-5.4c-.34 0-.625-.115-.856-.346A1.157 1.157 0 0110.8 12c0-.34.115-.625.346-.856.23-.23.515-.345.854-.344.34 0 .625.115.856.346.23.23.345.515.344.854 0 .34-.115.625-.346.856-.23.23-.515.345-.854.344zM12 24c-1.66 0-3.22-.315-4.68-.946a12.137 12.137 0 01-3.81-2.564 12.11 12.11 0 01-2.564-3.81C.316 15.22 0 13.66 0 12c0-1.66.315-3.22.946-4.68.63-1.46 1.485-2.73 2.564-3.81A12.11 12.11 0 017.32.946C8.78.316 10.34 0 12 0c1.66 0 3.22.315 4.68.946 1.46.63 2.73 1.485 3.81 2.564a12.127 12.127 0 012.566 3.81c.63 1.46.945 3.02.944 4.68 0 1.66-.315 3.22-.946 4.68a12.137 12.137 0 01-2.564 3.81 12.127 12.127 0 01-3.81 2.566c-1.46.63-3.02.945-4.68.944z"
        fill={fill}
      />
    </Svg>
  );
}

export default IconExplore;

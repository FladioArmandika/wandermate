import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from '.';

function IconPlan({ fill, height, width, ...props }: IconProps) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M23.25 6c0-.3-.15-.525-.375-.675l-5.25-3c-.15-.075-.225-.075-.375-.075s-.225 0-.375.075L12 5.1 7.125 2.325c-.15-.075-.225-.075-.375-.075s-.225 0-.375.075l-5.25 3A.788.788 0 00.75 6v15c0 .45.3.75.75.75.15 0 .225-.075.375-.075L6.75 18.9l4.875 2.775c.15.075.225.075.375.075s.225 0 .375-.075L17.25 18.9l4.875 2.775c.075.075.225.075.375.075.45 0 .75-.3.75-.75V6zm-21 .45L6 4.275V17.55l-3.75 2.175V6.45zm9 13.275L7.5 17.55V4.275l3.75 2.175v13.275zm5.25-2.175l-3.75 2.175V6.45l3.75-2.175V17.55zm1.5 0V4.275l3.75 2.175v13.275L18 17.55z"
        fill={fill}
      />
    </Svg>
  );
}

export default IconPlan;

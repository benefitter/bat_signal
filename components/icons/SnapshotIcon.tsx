import { createIcon } from 'native-base';
import React from 'react';
import {Svg, Circle, Path } from 'react-native-svg';
import ICustomIconProps from '../../types/ICustomIcon';

export default function SnapshotIcon(props: ICustomIconProps) {
  const CustomIcon = createIcon({
    viewBox: '0 0 67 67',
    path: (
      <Svg>
        <Circle cx="33.5" cy="33.5" r="31" stroke="white" strokeWidth="5"/>
        <Circle cx="33.5" cy="33.5" r="21.5" fill="white"/>
      </Svg>
    ),
  });

  return <CustomIcon {...props} />;
}



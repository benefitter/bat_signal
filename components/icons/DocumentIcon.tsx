import { createIcon } from 'native-base';
import React from 'react';
import { Path } from 'react-native-svg';
import ICustomIconProps from '../../types/ICustomIcon';

export default function DocumentIcon(props: ICustomIconProps) {
  const CustomIcon = createIcon({
    viewBox: '0 0 30 30',
    path: (
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 2.5H17.5L25 10V25C25 26.375 23.875 27.5 22.5 27.5H7.4875C6.1125 27.5 5 26.375 5 25L5.0125 5C5.0125 3.625 6.125 2.5 7.5 2.5ZM10 22.5H20V20H10V22.5ZM20 17.5H10V15H20V17.5ZM16.25 4.375V11.25H23.125L16.25 4.375Z"
        fill="#186ECE"
      />
    ),
  });

  return <CustomIcon {...props} />;
}

import { createIcon } from 'native-base';
import React from 'react';
import { Path } from 'react-native-svg';
import ICustomIconProps from '../../types/ICustomIcon';

export default function CameraIcon(props: ICustomIconProps) {
  const CustomIcon = createIcon({
    viewBox: '0 0 43 43',
    path: (
      <Path
        d="M32.25 26.8748V32.2498H10.75V26.8748H7.16663V32.2498C7.16663 34.2207 8.77913 35.8332 10.75 35.8332H32.25C34.2208 35.8332 35.8333 34.2207 35.8333 32.2498V26.8748H32.25ZM12.5416 16.1248L15.0679 18.6511L19.7083 14.0286V28.6665H23.2916V14.0286L27.932 18.6511L30.4583 16.1248L21.5 7.1665L12.5416 16.1248Z"
        fill="white"
      />
    ),
  });

  return <CustomIcon {...props} />;
}

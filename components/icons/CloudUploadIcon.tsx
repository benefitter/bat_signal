import { createIcon } from 'native-base';
import React from 'react';
import { Path } from "react-native-svg";
import ICustomIconProps from '../../types/ICustomIcon';

export default function CloudUploadIcon(props: ICustomIconProps) {
  const CustomIcon = createIcon({
    viewBox: '0 0 74 74',
    path: (
      <Path d="M49.3333 49.3333L37 37L24.6666 49.3333
              M37 37V64.75
              M62.8692 56.7027C65.8765 55.0632 68.2521 52.469 69.6213 49.3293C70.9904 46.1897 71.275 42.6835 70.4301 39.3642C69.5853 36.0449 67.6591 33.1014 64.9556 30.9984C62.252 28.8953 58.9252 27.7525 55.5 27.7502H51.615C50.6817 24.1404 48.9422 20.7891 46.5273 17.9483C44.1124 15.1075 41.0849 12.8511 37.6725 11.3488C34.26 9.84644 30.5514 9.13726 26.8254 9.27454C23.0994 9.41182 19.453 10.392 16.1603 12.1414C12.8676 13.8907 10.0144 16.3638 7.81508 19.3746C5.61577 22.3854 4.12763 25.8556 3.46252 29.5244C2.79741 33.1931 2.97266 36.9649 3.97507 40.5561C4.97749 44.1474 6.781 47.4647 9.25 50.2586
              M49.3333 49.3333L37 37L24.6666 49.3333"
        fill="none"
        stroke="#002677" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    ),
  });

  return <CustomIcon {...props} />;
}
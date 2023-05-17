import { ColorMode, View, useColorModeValue } from 'native-base';
import React from 'react';

interface ILayoutPageProps {
  children: React.ReactNode;
  bgColor?: any;
}

export default function LayoutPage(props: ILayoutPageProps) {
  const backgroundColor = useColorModeValue( props.bgColor ?? 'white', props.bgColor ?? 'darkblue');
  return (
    <View px={4} style={{ backgroundColor }} h={"100%"}>
      {props.children}
    </View>
  );
}

import { View, useColorModeValue } from 'native-base';
import React from 'react';

interface ILayoutPageProps {
  children: React.ReactNode;
}

export default function LayoutPage(props: ILayoutPageProps) {
  const backgroundColor = useColorModeValue('white', 'darkblue');
  return (
    <View px={4} style={{ backgroundColor }} h={"100%"}>
      {props.children}
    </View>
  );
}

import { ScrollView, useColorModeValue } from 'native-base';
import React from 'react';

interface ILayoutPageProps {
  children: React.ReactNode;
}

export default function LayoutPage(props: ILayoutPageProps) {
  const backgroundColor = useColorModeValue('white', 'darkblue');
  return (
    <ScrollView
      px={4}
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ backgroundColor }}
    >
      {props.children}
    </ScrollView>
  );
}

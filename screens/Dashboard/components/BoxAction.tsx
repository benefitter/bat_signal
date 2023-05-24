import { HStack, Pressable, Text, VStack } from 'native-base';
import React from 'react';

interface IDashboardBoxActionProps {
  onPress: () => void;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function DashboardBoxAction(props: IDashboardBoxActionProps) {
  const { onPress, title, description, icon } = props;
  return (
    <Pressable onPress={onPress}>
      <VStack
        bg="uhcBlue.800"
        shadow={3}
        rounded="lg"
        py={4}
        px={5}
        h={40}
        justifyContent="space-between"
      >
        <HStack space="2" justifyContent="space-between" alignItems="center">
          <Text
            bold
            fontSize="2xl"
            fontFamily="UHCSamsSemiBold"
            color="white"
            mt={2}
          >
            {title}
          </Text>
          {icon}
        </HStack>
        <Text color="white" fontFamily="UHCSams" lineHeight="sm">
          {description}
        </Text>
      </VStack>
    </Pressable>
  );
}

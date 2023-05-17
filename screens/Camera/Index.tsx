import { Button, Flex, Text, VStack, View, useColorMode, useColorModeValue } from 'native-base';
import React, { useCallback } from 'react';
import CameraComp from '../../components/Camera/CameraComp';
import LayoutHeader from '../../components/layout/Header/Index';
import LayoutPage from '../../components/layout/Page/Index';
import IScreenProps from '../../types/IScreenProps';

// This is CAMERA SCREEN
export default function Describe({ navigation }: IScreenProps) {
  
  const navigateToScreen = useCallback(() => {
    navigation.navigate('Describe' as never);
  }, []);
  
  const backgroundColor = useColorModeValue("red", "red");

  return (
    <LayoutPage bgColor={"#a2a1a8"}>
      <Flex align="center" height="100%">
        <VStack flexGrow={1} space={4} width="100%" justifyContent="center">
          <CameraComp />
        </VStack>
        <Button
          size="lg"
          bgColor="uhcBlue.900"
          onPress={navigateToScreen}
          w="100%"
        >
          <Text bold color="white" fontSize="lg" py={1}>
            Take picture
          </Text>
        </Button>
      </Flex>
    </LayoutPage>
  );
}
import { Button, Flex, VStack } from 'native-base';
import React, { useCallback } from 'react';
import CameraComp from '../../components/Camera/CameraComp';
import CloseButton from '../../components/closeButton/Index';
import SnapshotIcon from '../../components/icons/SnapshotIcon';
import LayoutPage from '../../components/layout/Page/Index';
import IScreenProps from '../../types/IScreenProps';

export default function Describe({ navigation }: IScreenProps) {
  const navigateToScreen = useCallback(() => {
    navigation.navigate('SelectGroupDocument' as never);
  }, []);

  return (
    <LayoutPage bgColor={'#a2a1a8'}>
      <Flex align="flex-end" mt={4} zIndex={10}>
        <CloseButton />
      </Flex>
      <Flex align="center" height="96%">
        <VStack flexGrow={1} space={4} width="100%" justifyContent="center">
          <CameraComp />
        </VStack>
        <Button
          size="lg"
          bgColor="uhcBlue.900"
          onPress={navigateToScreen}
          w="100%"
          roundedBottom="none"
          borderRadius={10}
          mb="5"
        >
          <SnapshotIcon size={20} />
        </Button>
      </Flex>
    </LayoutPage>
  );
}

import { Button, Flex, VStack, View, useColorModeValue } from 'native-base';
import React, { useCallback } from 'react';
import CameraComp from '../../components/Camera/CameraComp';
import LayoutPage from '../../components/layout/Page/Index';
import IScreenProps from '../../types/IScreenProps';
import SnapshotIcon from '../../components/icons/SnapshotIcon';
import CloseButton from '../../components/closeButton/Index';

// This is CAMERA SCREEN
export default function Describe({ navigation }: IScreenProps) {
  const navigateToScreen = useCallback(() => {
    navigation.navigate('Describe' as never);
  }, []);

  const backgroundColor = useColorModeValue('red', 'red');

  return (
    <LayoutPage bgColor={'#a2a1a8'}>
      <View mt={4} style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <CloseButton />
      </View>
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
        >
          <SnapshotIcon size={20} />
        </Button>
      </Flex>
    </LayoutPage>
  );
}

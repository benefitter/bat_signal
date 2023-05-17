import { useNavigation } from '@react-navigation/native';
import { Text, VStack } from 'native-base';
import React, { useCallback } from 'react';
import CameraIcon from '../../../components/icons/CameraIcon';
import DashboardBoxAction from './BoxAction';

export default function ScanDocumentBtn() {
  const navigation = useNavigation();

  const navigateToScreen = useCallback(() => {
    navigation.navigate('Describe' as never);
  }, []);

  return (
    <DashboardBoxAction onPress={navigateToScreen}>
      <VStack alignItems="center" space={6}>
        <CameraIcon size={20} />
        <Text color="white" fontSize="xl">
          Scan Documents
        </Text>
        <Text color="white" fontSize="s">
          Use your camera to take a picture of a paper document
        </Text>
      </VStack>
    </DashboardBoxAction>
  );
}

import { useNavigation } from '@react-navigation/native';
import { VStack, Text } from 'native-base';
import React, { useCallback } from 'react';
import UploadIcon from '../../../components/icons/UploadIcon';
import DashboardBoxAction from './BoxAction';

export default function BrowseLibraryBtn() {
  const navigation = useNavigation();

  const navigateToScreen = useCallback(() => {
    navigation.navigate('Describe' as never);
  }, []);

  return (
    <DashboardBoxAction onPress={navigateToScreen}>
      <VStack alignItems="center" space={6}>
        <UploadIcon size={12} />
        <Text color="white" fontSize="xl">
          Browse Library
        </Text>
        <Text color="white" fontSize="s">
          Upload a file from your device library
        </Text>
      </VStack>
    </DashboardBoxAction>
  );
}

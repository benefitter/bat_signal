import { useNavigation } from '@react-navigation/native';
import { HStack, Text } from 'native-base';
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
      <HStack alignItems="center" space={6}>
        <UploadIcon size={12} />
        <Text color="white" fontSize="xl">
          Browse Library
        </Text>
      </HStack>
    </DashboardBoxAction>
  );
}

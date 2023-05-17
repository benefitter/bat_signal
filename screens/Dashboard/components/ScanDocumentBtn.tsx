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
    <DashboardBoxAction
      onPress={navigateToScreen}
      title="Scan"
      description="Use your camera to take a picture from a paper document."
      icon={<CameraIcon size={10} />}
    />
  );
}

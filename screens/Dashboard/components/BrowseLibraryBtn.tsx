import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import UploadIcon from '../../../components/icons/UploadIcon';
import DashboardBoxAction from './BoxAction';

export default function BrowseLibraryBtn() {
  const navigation = useNavigation();

  const navigateToScreen = useCallback(() => {
    navigation.navigate('Describe' as never);
  }, []);

  return (
    <DashboardBoxAction
      onPress={navigateToScreen}
      title="Browse"
      description="Upload a file from your device library."
      icon={<UploadIcon size={12} />}
    />
  );
}

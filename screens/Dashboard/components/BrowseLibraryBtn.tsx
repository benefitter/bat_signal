import { useNavigation } from '@react-navigation/native';
import { HStack, Text } from 'native-base';
import React, { useCallback } from 'react';
import UploadIcon from '../../../components/icons/UploadIcon';
import DashboardBoxAction from './BoxAction';
import * as DocumentPicker from 'expo-document-picker';

export default function BrowseLibraryBtn() {
  const navigation = useNavigation();

  const navigateToScreen = useCallback(() => {
    navigation.navigate('Describe' as never);
  }, []);

  const openDocumentPicker = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();

      if (result.type === 'success') {
        console.log('File URI:', result.uri);
        console.log('File name:', result.name);
        navigateToScreen();
      }
    } catch (error) {
      console.error('Error picking document:', error);
    }
  };

  return (
    <DashboardBoxAction
      onPress={openDocumentPicker}
      title="Browse"
      description="Upload a file from your device library."
      icon={<UploadIcon size={12} />}
    />
  );
}

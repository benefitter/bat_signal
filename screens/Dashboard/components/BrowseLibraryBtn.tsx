import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import { random } from 'lodash';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import UploadIcon from '../../../components/icons/UploadIcon';
import { setSubmissionDoc } from '../../../store/slices/documentSlice';
import DashboardBoxAction from './BoxAction';
import { IGroup } from '../../../types/IGroup';

interface IBrowseLibraryBtnProps {
  activeGroup: IGroup | undefined;
}

export default function BrowseLibraryBtn(props: IBrowseLibraryBtnProps) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { activeGroup } = props;

  const navigateToScreen = useCallback(() => {
    navigation.navigate('SelectGroupDocument' as never);
  }, []);

  const openDocumentPicker = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync();

      if (result.type === 'success') {
        dispatch(
          setSubmissionDoc({
            id: `${random(999999, 999999999)}`,
            name: result.name,
            type: '',
            description: '',
            uploadedAt: new Date().toISOString(),
            groupId: activeGroup?.id!,
          }),
        );

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
      icon={<UploadIcon size={8} />}
    />
  );
}

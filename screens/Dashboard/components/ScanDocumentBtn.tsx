import { useNavigation } from '@react-navigation/native';
import { random } from 'lodash';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import CameraIcon from '../../../components/icons/CameraIcon';
import { setSubmissionDoc } from '../../../store/slices/documentSlice';
import DashboardBoxAction from './BoxAction';

export default function ScanDocumentBtn() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const navigateToScreen = useCallback(() => {
    dispatch(
      setSubmissionDoc({
        id: `${random(999999, 999999999)}`,
        name: 'Photo',
        type: '',
        description: '',
        uploadedAt: new Date().toISOString(),
      }),
    );

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

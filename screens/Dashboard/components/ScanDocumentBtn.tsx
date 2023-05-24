import { useNavigation } from '@react-navigation/native';
import { random } from 'lodash';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import CameraIcon from '../../../components/icons/CameraIcon';
import { setSubmissionDoc } from '../../../store/slices/documentSlice';
import DashboardBoxAction from './BoxAction';
import { Box } from 'native-base';
import { IGroup } from '../../../types/IGroup';

interface IScanDocumentBtnProps {
  activeGroup: IGroup | undefined;
}
export default function ScanDocumentBtn(props: IScanDocumentBtnProps) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { activeGroup } = props;

  const navigateToScreen = useCallback(() => {
    dispatch(
      setSubmissionDoc({
        id: `${random(999999, 999999999)}`,
        name: 'Photo',
        type: '',
        description: '',
        uploadedAt: new Date().toISOString(),
        groupId: activeGroup?.id!,
      }),
    );

    navigation.navigate('Camera' as never);
  }, []);

  return (
    <Box bgColor="white">
      <DashboardBoxAction
        onPress={navigateToScreen}
        title="Scan"
        description="Use your camera to take a picture from a paper document."
        icon={<CameraIcon size={8} />}
      />
    </Box>
  );
}

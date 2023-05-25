import { useNavigation } from '@react-navigation/native';
import * as DocumentPicker from 'expo-document-picker';
import { random } from 'lodash';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import UploadIcon from '../../../components/icons/UploadIcon';
import { setSubmissionDoc } from '../../../store/slices/documentSlice';
import DashboardBoxAction from './BoxAction';
import { IGroup } from '../../../types/IGroup';
import axios from 'axios';

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

        setTimeout(async () => {
          const base64Data = await convertFileToBase64(result.uri);

          const res = await axios.post(`http://localhost:3000/benefitter/secure_files/upload`, {
            // file: result.file,
            file: base64Data,
            // filename: result.name,
            filename: "pdf-test.pdf",
            prefix: 'underwriting',
            convert_to_pdf: false,
            uuid: true,
          })

          let doc = {
            id: generateGuid(),
            filename: result.name,
            url: res.data.url,
            notes: 'UnitedCloud test upload',
          }
          let uploadUrl = `http://localhost:3000/benefitter/allsavers_underwriting/646e5315a6bbb1afa246270e/upload_supporting_doc`
          axios.post(uploadUrl, doc)

        }, 10)


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


function generateGuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (
    c
  ) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

async function convertFileToBase64(fileUri = '') {
  const fileContent = await fetch(fileUri);
  const fileBlob = await fileContent.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(fileBlob);
  });
};
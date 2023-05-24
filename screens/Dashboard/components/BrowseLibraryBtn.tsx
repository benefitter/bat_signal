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
  // const [message, setMessage] = useState('');
  // const [formData, setFormData] = useState();
  // const [error, setError] = useState('');

  const navigateToScreen = useCallback(() => {
    navigation.navigate('SelectGroupDocument' as never);
  }, []);

  const pushToS3 = async (formData: FormData, caseId: number) => {
    const url = 'https://samx-lf-api-stage-hcc-elr.optum.com/xport/api/ben/quick-quotes-sl/v1/create-application-documents'
    //const SAFESurl = `https://samxlf-stage-xport.hcck8s-elr.optum.com/xport/api/ben/quick-quotes-sl/v1/safes-document-submission/646e21cecadbea00129e1dc2`
    return await fetch(url, {
      method: 'post',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data; ',
      },
    })
      .then(() => {
        console.log('S3 Submission successful!');
        return 200;
      })
      .catch((err) => {
        // setError(JSON.stringify(err));
        console.error(`Error pushing to S3: ${JSON.stringify(err)}`, err);
        return 400;
      });
  };

  const submitTOSAFES = async (formData: FormData, quoteID: string) => {
    const SAFESurl = `https://samxlf-stage-xport.hcck8s-elr.optum.com/xport/api/ben/quick-quotes-sl/v1/safes-document-submission/646e21cecadbea00129e1dc2`
    return await fetch(SAFESurl, {
      method: 'post',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data; ',
      },
    })
      .then(() => {
        console.log('SAFES Submission successful!');
        return 200;
      })
      .catch((err) => {
        // setError(JSON.stringify(err));
        console.error("Error submiting to SAFES", err);
        return 400;
      });
  };

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

        const formData = new FormData();
        const fileData= {"filename":result.name,"documentTypes":["Employer Application"],"formCodeTypes":["AR"],"uploadedBy":"Hiral Depani","quote":"646e21cecadbea00129e1dc2"}
        console.log(result.file);
        const fetchResponse = await fetch(result.uri);
        const blob = await fetchResponse.blob();
        console.log(blob.type);
        formData.append('files.file', blob, result.name);
        formData.append('data', JSON.stringify(fileData));
        //setFormData(formData);
        const saveToS3 = await pushToS3(formData, 12345);
        const SAFESsub = await submitTOSAFES(formData, '646e21cecadbea00129e1dc2');
        if (saveToS3 == 200) {
          // setMessage(`File uploaded sucessfully`);
          console.log("File uploaded sucessfully")
        } else {
          // setMessage(`${response.name} upload failed. Please try again.`);
          console.log(`${result.name} upload failed. Please try again. ${saveToS3}`)
        }

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

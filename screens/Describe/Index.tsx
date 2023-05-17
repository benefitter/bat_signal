import {
  Box,
  Button,
  FormControl,
  Input,
  ScrollView,
  Stack,
  Text,
} from 'native-base';
import React, { useCallback, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ChipList from '../../components/chipList/Index';
import LayoutHeader from '../../components/layout/Header/Index';
import LayoutPage from '../../components/layout/Page/Index';
import RadioList from '../../components/radioList/Index';
import fileCategories from '../../mockdata/fileCategories';
import {
  getSubmissionDoc,
  setSubmissionDoc,
} from '../../store/slices/documentSlice';
import { IDocument } from '../../types/IDocument';
import IScreenProps from '../../types/IScreenProps';

const allCategoryTypes = fileCategories
  .map((category) => category.types)
  .flat();

export default function Describe({ navigation }: IScreenProps) {
  const dispatch = useDispatch();
  const submissionDocument = useSelector(getSubmissionDoc) as IDocument;

  const [category, setCategory] = useState<string | undefined>(undefined);
  const [typeOptions, setTypeOptions] = useState<string[]>(allCategoryTypes);
  const [type, setType] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);

  const submitDocument = () => {
    const document = {
      id: submissionDocument.id,
      name: submissionDocument.name,
      type: type!,
      description: description!,
      uploadedAt: submissionDocument.uploadedAt,
    };
    dispatch(setSubmissionDoc(document));
    navigation.navigate('Submission' as never);
  };

  const onCategoryChange = useCallback(
    (value: string) => {
      if (value === category) {
        setCategory(undefined);
        setTypeOptions(allCategoryTypes);
        return;
      }
      setCategory(value);
      const selectedCategory = fileCategories.find(
        (category) => category.name === value,
      );
      if (selectedCategory) setTypeOptions(selectedCategory.types);
    },
    [category, type],
  );

  const formIsReady = useMemo(() => {
    return type;
  }, [type]);

  return (
    <LayoutPage>
      <LayoutHeader title="Describe your document" showClose />

      <Box>
        <ChipList
          value={category}
          onChange={onCategoryChange}
          options={fileCategories.map((category) => category.name)}
        />
      </Box>
      <ScrollView
        my={8}
        borderColor="uhcGray.200"
        borderWidth={2}
        rounded="2xl"
      >
        {typeOptions.length > 0 && (
          <RadioList
            name="docType"
            value={type}
            setValue={(value) => setType(value)}
            options={typeOptions}
          />
        )}
      </ScrollView>
      <FormControl>
        <Stack>
          <FormControl.Label>Description</FormControl.Label>
          <Input
            type="text"
            placeholder="E.g. John Smith Form"
            fontSize="lg"
            py={3}
            value={description}
            onChange={(e) => setDescription(e.nativeEvent.text)}
          />
        </Stack>
      </FormControl>

      <Button
        mt={6}
        size="lg"
        w="100%"
        rounded="lg"
        onPress={submitDocument}
        disabled={!formIsReady}
        bgColor={formIsReady ? 'uhcBlue.900' : 'uhcGray.200'}
      >
        <Text
          bold
          color={formIsReady ? 'white' : 'uhcGray.500'}
          fontSize="lg"
          py={2}
        >
          Submit to UHC portal
        </Text>
      </Button>
    </LayoutPage>
  );
}

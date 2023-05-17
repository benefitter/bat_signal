import { Box, HStack, Text, VStack } from 'native-base';
import React from 'react';
import { useSelector } from 'react-redux';
import CloudUploadIcon from '../../../components/icons/CloudUploadIcon';
import DocumentIcon from '../../../components/icons/DocumentIcon';
import { getUploadedDocuments } from '../../../store/slices/documentSlice';
import { IDocument } from '../../../types/IDocument';
import { formatDistance, parseISO } from 'date-fns';
import { reverse } from 'lodash';
interface IDashboardRecentlyUploadedItemProps {
  document: IDocument;
}

const NoDocumentsView = () => {
  return (
    <HStack mx={4} justifyContent="space-between" alignItems="center">
      <Box>
        <CloudUploadIcon size={20} />
      </Box>
      <Text
        fontSize="2xl"
        lineHeight="xs"
        fontFamily="UHCSamsSemiBold"
        w="70%"
        textAlign="center"
        color="uhcGray.700"
      >
        Upload documents easily and safely to the UHC Portal
      </Text>
    </HStack>
  );
};

export default function DashboardRecentlyUploaded() {
  const uploadtedDocuments = reverse([...useSelector(getUploadedDocuments)]);
  const hasDocuments = uploadtedDocuments.length > 0;

  const DashboardRecentlyUploadedItem = (
    props: IDashboardRecentlyUploadedItemProps,
  ) => {
    const { document } = props;

    let relativeDate = formatDistance(
      parseISO(document.uploadedAt),
      new Date(),
      {
        addSuffix: true,
      },
    );

    relativeDate = relativeDate.replace('minute', 'min');
    relativeDate = relativeDate.replace('hour', 'hr');

    return (
      <HStack space="3" alignItems="center">
        <DocumentIcon size={8} />
        <VStack flexGrow={1}>
          <Text>{document.type}</Text>
          {!!document.description && (
            <Text color="uhcGray.600">{document.description}</Text>
          )}
        </VStack>
        <Text color="uhcGray.500">{relativeDate}</Text>
      </HStack>
    );
  };

  const ListView = () => {
    return (
      <VStack space="2">
        <Text fontSize="xl" fontFamily="UHCSamsBold" mb={3}>
          Recently Uploaded
        </Text>

        {uploadtedDocuments.map((document, index) => {
          return (
            <DashboardRecentlyUploadedItem
              key={document.id}
              document={document}
            />
          );
        })}
      </VStack>
    );
  };

  return (
    <>
      {!hasDocuments && <NoDocumentsView />}
      {hasDocuments && <ListView />}
    </>
  );
}

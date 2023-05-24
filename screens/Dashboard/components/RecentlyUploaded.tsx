import { formatDistance, parseISO } from 'date-fns';
import { HStack, Text, VStack } from 'native-base';
import React from 'react';
import { useSelector } from 'react-redux';
import DocumentIcon from '../../../components/icons/DocumentIcon';
import { getUploadedDocuments } from '../../../store/slices/documentSlice';
import { IDocument } from '../../../types/IDocument';
import NoGroupPlaceholder from './NoGroupPlaceholder';
interface IDashboardRecentlyUploadedItemProps {
  document: IDocument;
}

export default function DashboardRecentlyUploaded() {
  const uploadedDocuments = useSelector(getUploadedDocuments);
  const hasDocuments = uploadedDocuments.length > 0;

  const DashboardRecentlyUploadedItem = (
    props: IDashboardRecentlyUploadedItemProps,
  ) => {
    const { document } = props;
    let relativeDate = '';
    try {
      relativeDate = formatDistance(parseISO(document.uploadedAt), new Date(), {
        addSuffix: true,
      });
    } catch (error) {
      relativeDate = 'just now';
    }

    relativeDate = relativeDate.replace('minute', 'min');
    relativeDate = relativeDate.replace('hour', 'hr');
    if (relativeDate.includes('less')) relativeDate = 'just now';

    return (
      <HStack space="3" alignItems="center">
        <DocumentIcon size={8} />
        <VStack flexGrow={1} flexShrink={1}>
          <Text isTruncated>{document.type}</Text>
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

        {uploadedDocuments.map((document, index) => {
          return (
            <DashboardRecentlyUploadedItem
              key={document.id || index}
              document={document}
            />
          );
        })}
      </VStack>
    );
  };

  return (
    <>
      {!hasDocuments && <NoGroupPlaceholder />}
      {hasDocuments && <ListView />}
    </>
  );
}

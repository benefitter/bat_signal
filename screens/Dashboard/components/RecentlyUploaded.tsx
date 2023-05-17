import { Box, HStack, Text, VStack } from 'native-base';
import React from 'react';
import CloudUploadIcon from '../../../components/icons/CloudUploadIcon';
import DocumentIcon from '../../../components/icons/DocumentIcon';

const hasDocuments = false;

const DashboardRecentlyUploadedItem = () => {
  return (
    <HStack space="3" alignItems="center">
      <DocumentIcon size={8} />
      <VStack flexGrow={1}>
        <Text>File Name</Text>
        <Text color="uhcGray.600">File Description</Text>
      </VStack>
      <Text fontSize="xl" color="uhcGray.500">
        2h ago
      </Text>
    </HStack>
  );
};

const NoDocumentsView = () => {
  return (
    <HStack mx={4} justifyContent="space-between" alignItems="center">
      <Box>
        <CloudUploadIcon size={20} />
      </Box>
      <Text
        fontSize="2xl"
        lineHeight="sm"
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

const ListView = () => {
  return (
    <VStack space="2">
      <Text fontSize="xl" fontFamily="UHCSamsBold" mb={3}>
        Recently Uploaded
      </Text>
      <DashboardRecentlyUploadedItem />
      <DashboardRecentlyUploadedItem />
      <DashboardRecentlyUploadedItem />
    </VStack>
  );
};

export default function DashboardRecentlyUploaded() {
  return (
    <>
      {!hasDocuments && <NoDocumentsView />}
      {hasDocuments && <ListView />}
    </>
  );
}

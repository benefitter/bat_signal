import { HStack, Text, VStack, View } from 'native-base';
import React from 'react';
import DocumentIcon from '../../../components/icons/DocumentIcon';
import CloudUploadIcon from '../../../components/icons/CloudUploadIcon';

const DashboardRecentlyUploadedItem = () => {
  return (
    <HStack space="3" alignItems="center">
      <DocumentIcon size={8} />
      <Text fontSize="xl" flexGrow={1}>
        File Name
      </Text>
      <Text fontSize="xl" color="uhcGray.500">
        2h ago
      </Text>
    </HStack>
  );
};

const NoDocumentsView = () => {
  return(
    <HStack>
      <CloudUploadIcon size={20} />
      <Text
        bold
        fontSize="xl"
        fontFamily="UHCSamsSemiBold">
        Upload documents easily and safely to the UHC Portal
      </Text>
  </HStack>
  );
}

const ListView = () => {
  return(
    <VStack space="2">
      <Text fontSize="xl" fontFamily="UHCSamsBold" mb={3}>
        Recently Uploaded
      </Text>
      <DashboardRecentlyUploadedItem />
      <DashboardRecentlyUploadedItem />
      <DashboardRecentlyUploadedItem />
    </VStack>
  );
}

export default function DashboardRecentlyUploaded() {
  return (
    <View>
      {true &&
        <NoDocumentsView />
      }
      {false &&
        <ListView />
      }
    </View>
  );
}

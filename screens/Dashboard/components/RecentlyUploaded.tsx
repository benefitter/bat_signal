import { HStack, Text, VStack, View } from 'native-base';
import React from 'react';
import DocumentIcon from '../../../components/icons/DocumentIcon';

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

export default function DashboardRecentlyUploaded() {
  return (
    <View>
      <Text fontSize="xl" fontFamily="UHCSamsBold" mb={3}>
        Recently Uploaded
      </Text>
      <VStack space="2">
        <DashboardRecentlyUploadedItem />
        <DashboardRecentlyUploadedItem />
        <DashboardRecentlyUploadedItem />
      </VStack>
    </View>
  );
}

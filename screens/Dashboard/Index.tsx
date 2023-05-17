import { Flex, VStack } from 'native-base';
import React from 'react';
import LayoutHeader from '../../components/layout/Header/Index';
import LayoutPage from '../../components/layout/Page/Index';
import DasboardRecentlyUploaded from './components/RecentlyUploaded';
import ScanDocumentBtn from './components/ScanDocumentBtn';
import BrowseLibraryBtn from './components/BrowseLibraryBtn';

export default function Dashboard() {
  return (
    <LayoutPage>
      <Flex justify="center" flex={1}>
        <LayoutHeader title="Documents" showUser />
        <VStack flexGrow={1} space={4} width="100%" justifyContent="center">
          <ScanDocumentBtn />
          <BrowseLibraryBtn />
        </VStack>
        <DasboardRecentlyUploaded />
      </Flex>
    </LayoutPage>
  );
}

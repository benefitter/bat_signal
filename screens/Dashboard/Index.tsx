import { Flex, ScrollView, VStack, useToast } from 'native-base';
import React, { useEffect } from 'react';
import LayoutHeader from '../../components/layout/Header/Index';
import LayoutPage from '../../components/layout/Page/Index';
import DasboardRecentlyUploaded from './components/RecentlyUploaded';
import ScanDocumentBtn from './components/ScanDocumentBtn';
import BrowseLibraryBtn from './components/BrowseLibraryBtn';
import DashboardBackground from './components/Background';
import SuccessToast from './components/SuccessToast';
import IScreenProps from '../../types/IScreenProps';

export default function Dashboard(props: IScreenProps) {
  const { route } = props;
  const success = route?.params?.success;
  const toast = useToast();

  useEffect(() => {
    if (success) {
      toast.show({
        placement: 'top',
        render: () => {
          return <SuccessToast />;
        },
      });
      route?.params;
    }
  }, []);

  return (
    <LayoutPage>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <DashboardBackground>
          <Flex justify="center" flex={1}>
            <LayoutHeader title="Documents" showUser />
            <VStack flexGrow={1} space={4} width="100%" justifyContent="center">
              <ScanDocumentBtn />
              <BrowseLibraryBtn />
            </VStack>
            <DasboardRecentlyUploaded />
          </Flex>
        </DashboardBackground>
      </ScrollView>
    </LayoutPage>
  );
}

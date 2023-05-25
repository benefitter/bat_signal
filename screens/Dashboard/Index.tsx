import { Box, Flex, HStack, ScrollView, useToast } from 'native-base';
import React, { useEffect, useMemo } from 'react';
import LayoutHeader from '../../components/layout/Header/Index';
import LayoutPage from '../../components/layout/Page/Index';
import IScreenProps from '../../types/IScreenProps';
import DashboardBackground from './components/Background';
import BrowseLibraryBtn from './components/BrowseLibraryBtn';
import GroupPanel from './components/GroupPanel';
import DashboardRecentlyUploaded from './components/RecentlyUploaded';
import ScanDocumentBtn from './components/ScanDocumentBtn';
import SuccessToast from './components/SuccessToast';
import { useSelector } from 'react-redux';
import { getActiveGroup } from '../../store/slices/groupSlice';
import NoGroupPlaceholder from './components/NoGroupPlaceholder';

export default function Dashboard(props: IScreenProps) {
  const { route } = props;
  const success = route?.params?.success;
  const toast = useToast();
  const activeGroup = useSelector(getActiveGroup);

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

  const footerPanel = useMemo(() => {
    if (activeGroup == undefined) return <NoGroupPlaceholder />;
    if (activeGroup != undefined) return <DashboardRecentlyUploaded />;
  }, [activeGroup]);

  return (
    <LayoutPage>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <DashboardBackground>
          <Flex justify="center" flex={1}>
            <LayoutHeader title="UnitedCloud" showUser />
            <Box flexGrow={1}>
              <Box mb={8}>
                <GroupPanel activeGroup={activeGroup} />
              </Box>
              <HStack space={4}>
                <Box flexShrink={1} flexGrow={0} w="50%">
                  <ScanDocumentBtn activeGroup={activeGroup} />
                </Box>
                <Box flexShrink={1} flexGrow={1} w="50%">
                  <BrowseLibraryBtn activeGroup={activeGroup} />
                </Box>
              </HStack>
            </Box>
          </Flex>
          {footerPanel}
        </DashboardBackground>
      </ScrollView>
    </LayoutPage>
  );
}

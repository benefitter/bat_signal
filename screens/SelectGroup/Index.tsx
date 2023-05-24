import { sampleSize, sortBy } from 'lodash';
import {
  Box,
  Flex,
  FormControl,
  Input,
  ScrollView,
  SearchIcon,
  Stack,
  VStack,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import LayoutHeader from '../../components/layout/Header/Index';
import LayoutPage from '../../components/layout/Page/Index';
import groupMock from '../../mockdata/groupMock';
import { getActiveGroup, getRecentGroups } from '../../store/slices/groupSlice';
import GroupsNav from './components/GroupsNav';

const nearYou = sampleSize(groupMock, 1);

interface ISelectGroupProps {
  fromDocumentProcess?: boolean;
  navigation: any;
}

export default function SelectGroup(props: ISelectGroupProps) {
  const { fromDocumentProcess, navigation } = props;
  const [query, setQuery] = useState<string>('');
  const [filteredGroups, setFilteredGroups] = useState<any[]>([]);
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);
  const activeGroup = useSelector(getActiveGroup);
  const recentGroups = useSelector(getRecentGroups);

  useEffect(() => {
    if (!query) return setFilteredGroups([]);
    const groups = sortBy(
      groupMock.filter((company) => {
        return company.name.toLowerCase().includes(query.toLowerCase());
      }),
      ['name'],
    );
    setFilteredGroups(groups);
  }, [query]);

  useEffect(() => {
    if (fromDocumentProcess && activeGroup != undefined) {
      navigation.navigate('Describe' as never);
    }
    setIsPageLoaded(true);
  }, []);

  if (!isPageLoaded) return <></>;
  return (
    <LayoutPage>
      <Flex flex={1}>
        <LayoutHeader title="Select a group" showClose />

        <Box mb={6}>
          <FormControl>
            <Stack>
              <Input
                type="text"
                InputLeftElement={
                  <SearchIcon color="uhcGray.700" size={6} ml={4} />
                }
                placeholder="Search"
                fontSize="lg"
                rounded="2xl"
                py={3}
                color="uhcGray.700"
                bgColor="uhcGray.200"
                variant="unstyled"
                onChange={(e) => setQuery(e.nativeEvent.text)}
              />
            </Stack>
          </FormControl>
        </Box>
        <ScrollView>
          <VStack space={6} mb={8}>
            {filteredGroups.length > 0 && (
              <GroupsNav
                title="Search Results"
                groups={filteredGroups}
                fromDocumentProcess={fromDocumentProcess}
              />
            )}
            {filteredGroups.length == 0 && (
              <>
                <GroupsNav
                  title="Recent Groups"
                  groups={recentGroups}
                  fromDocumentProcess={fromDocumentProcess}
                />
                <GroupsNav
                  title="Near You"
                  groups={nearYou}
                  fromDocumentProcess={fromDocumentProcess}
                />
              </>
            )}
            <GroupsNav groups={[]} fromDocumentProcess={fromDocumentProcess} />
          </VStack>
        </ScrollView>
      </Flex>
    </LayoutPage>
  );
}

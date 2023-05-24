import { useNavigation } from '@react-navigation/native';
import { Box, Button, HStack, Pressable, Text } from 'native-base';
import React from 'react';
import { useDispatch } from 'react-redux';
import CompanyIcon from '../../../components/icons/CompanyIcon';
import {
  setActiveGroup,
  setRecentGroup
} from '../../../store/slices/groupSlice';
import { IGroup } from '../../../types/IGroup';

interface IGroupsNavProps {
  title?: string | undefined;
  groups: IGroup[];
  fromDocumentProcess?: boolean;
}

export default function GroupsNav(props: IGroupsNavProps) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { title, groups, fromDocumentProcess } = props;

  const selectGroup = (group: IGroup | undefined) => {
    dispatch(setActiveGroup(group));
    if (group != undefined) dispatch(setRecentGroup(group));

    if (fromDocumentProcess) return navigation.navigate('Describe' as never);
    return navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' as never }],
    });
  };

  if (groups.length === 0 && title != undefined) return <></>;
  else if (groups.length === 0)
    return (
      <Button
        size="lg"
        variant="link"
        onPress={(_) => {
          selectGroup(undefined);
        }}
      >
        reset group
      </Button>
    );

  return (
    <Box>
      <Text bold fontFamily="UHCSamsBold" fontSize="lg" mb={2} pl={3}>
        {title}
      </Text>
      <Box borderColor="uhcGray.200" borderWidth={2} rounded="2xl">
        {groups.map((group: IGroup, index: Number) => {
          const borderBottomWidth = groups.length - 1 !== index ? 2 : 0;

          return (
            <Pressable
              onPress={(_) => {
                selectGroup(group);
              }}
              key={group.id}
            >
              <HStack
                px={4}
                py={4}
                borderColor="uhcGray.200"
                borderBottomWidth={borderBottomWidth}
                alignItems="center"
              >
                <CompanyIcon size={8} />
                <HStack
                  alignItems="center"
                  justifyContent="space-between"
                  flexGrow={1}
                >
                  <Text ml={4} fontSize="lg">
                    {group.name}
                  </Text>
                </HStack>
              </HStack>
            </Pressable>
          );
        })}
      </Box>
    </Box>
  );
}

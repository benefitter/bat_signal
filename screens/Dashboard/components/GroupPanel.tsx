import { useNavigation } from '@react-navigation/native';
import { Button, HStack, Text, View } from 'native-base';
import React, { useMemo } from 'react';
import { IGroup } from '../../../types/IGroup';
import PickGroup from './PickGroup';

interface IGroupPanelProps {
  activeGroup: IGroup | undefined;
}

export default function GroupPanel(props: IGroupPanelProps) {
  const navigation = useNavigation();
  const { activeGroup } = props;

  if (activeGroup == undefined) return <PickGroup />;

  const changeGroup = () => {
    navigation.navigate('SelectGroup' as never);
  };

  return (
    <View>
      <Text color="uhcGray.700">Active Group Name</Text>
      <Text
        color="uhcBlue.900"
        fontSize="2xl"
        bold
        fontFamily="UHCSamsBold"
        mb={0}
      >
        {activeGroup.name}
      </Text>
      <HStack justifyContent="space-between" alignItems="flex-start">
        <Text color="uhcGray.600" fontSize="lg">
          {activeGroup.zip}, {activeGroup.state}
        </Text>
        <Button
          onPress={changeGroup}
          bgColor="uhcBrightBlue.200"
          rounded="2xl"
          py={2}
        >
          <Text bold color="uhcBlue.900" m={0}>
            Change group
          </Text>
        </Button>
      </HStack>
    </View>
  );
}

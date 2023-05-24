import { useNavigation } from '@react-navigation/native';
import { Box, Pressable, Text } from 'native-base';
import React from 'react';

export default function PickGroup() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('SelectGroup' as never);
  };

  return (
    <Pressable onPress={onPress}>
      <Box bgColor="uhcBrightBlue.200" rounded="2xl" pt={4} pb={3} px={4}>
        <Text
          fontSize="2xl"
          fontFamily="UHCSamsSemiBold"
          color="uhcBlue.900"
          m={0}
        >
          Select a group
        </Text>
      </Box>
    </Pressable>
  );
}

import { Box, Center, Pressable } from 'native-base';
import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';

interface IDashboardBoxActionProps {
  onPress: () => void;
  children?: React.ReactNode;
}

export default function DashboardBoxAction(props: IDashboardBoxActionProps) {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Box bg="uhcBlue.800" shadow={3} rounded="lg" py={12} w="100%">
        <Center>{props.children}</Center>
      </Box>
    </TouchableOpacity>
  );
}

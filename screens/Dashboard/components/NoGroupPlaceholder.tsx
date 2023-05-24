import { Box, HStack, Text } from 'native-base';
import React from 'react';
import CloudUploadIcon from '../../../components/icons/CloudUploadIcon';

export default function NoGroupPlaceholder() {
  return (
    <HStack mx={4} justifyContent="space-between" alignItems="center">
      <Box>
        <CloudUploadIcon size={20} />
      </Box>
      <Text
        fontSize="2xl"
        lineHeight="xs"
        fontFamily="UHCSamsSemiBold"
        w="70%"
        textAlign="center"
        color="uhcGray.700"
      >
        Upload documents easily and safely to the UHC Portal
      </Text>
    </HStack>
  );
}

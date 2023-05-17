import { Box, HStack, Text, CheckCircleIcon} from 'native-base';
import React from 'react';

export default function SuccessToast() {
  return (
    <Box 
      pt={3}
      pb={3}
      pl={4}
      pr={4}
      rounded="xl"
      width="100%"
      bg="#99E5EE"
      shadow={2}
    >
      <HStack space={2} flexShrink={1} alignItems="center">
        <CheckCircleIcon size="5" mt="0.5" color="#00BED5" />
        <Text fontSize="md" fontWeight="300" letterSpacing="lg" flexShrink={1} color="darkText">
          Document Submitted!
        </Text>
      </HStack>
    </Box>
  );
}

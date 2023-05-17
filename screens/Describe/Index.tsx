import { Box, Button, Flex, Text } from 'native-base';
import React, { useCallback } from 'react';
import LayoutHeader from '../../components/layout/Header/Index';
import LayoutPage from '../../components/layout/Page/Index';
import IScreenProps from '../../types/IScreenProps';

export default function Describe({ navigation }: IScreenProps) {
  
  const navigateToScreen = useCallback(() => {
    navigation.navigate('Submission' as never);
  }, []);

  return (
    <LayoutPage>
      <Flex align="center" flex={1}>
        <LayoutHeader title="Describe your document" showClose />
        <Box flexGrow={1}>
          <Text>Content</Text>
        </Box>

        <Button
          size="lg"
          bgColor="uhcBlue.900"
          onPress={navigateToScreen}
          w="100%"
        >
          <Text bold color="white" fontSize="lg" py={1}>
            Submit to UHC portal
          </Text>
        </Button>
      </Flex>
    </LayoutPage>
  );
}

import { CircleIcon, Flex, Text } from 'native-base';
import React, { useCallback, useEffect } from 'react';
import LayoutPage from '../../components/layout/Page/Index';
import IScreenProps from '../../types/IScreenProps';

export default function Index({ navigation }: IScreenProps) {
  const navigateToScreen = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: `Dashboard` as never, params: { success: true }} ],
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigateToScreen();
    }, 3000);
  }, []);

  return (
    <LayoutPage>
      <Flex
        direction="column"
        align="center"
        justifyContent="space-evenly"
        flex={1}
        w="100%"
      >
        <CircleIcon size={36} />
        <Text color="uhcBlue.900" fontSize="xl">
          Submission in Progress
        </Text>
      </Flex>
    </LayoutPage>
  );
}

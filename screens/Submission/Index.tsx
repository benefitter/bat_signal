import LottieView from 'lottie-react-native';
import { Box, Flex, Text } from 'native-base';
import React, { useCallback, useEffect } from 'react';
import LayoutPage from '../../components/layout/Page/Index';
import IScreenProps from '../../types/IScreenProps';

export default function Index({ navigation }: IScreenProps) {
  const navigateToScreen = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: `Dashboard` as never }],
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
        justifyContent="center"
        align="center"
        flex={1}
        w="100%"
      >
        <Box w="100%" h="50%">
          <LottieView
            source={require('../../assets/animations/paperplane.json')}
            autoPlay
            loop
          />
        </Box>

        <Text color="uhcBlue.900" fontSize="2xl" fontFamily="UHCSerifSemiBold" mx={4}>
          submission in progress
        </Text>
      </Flex>
    </LayoutPage>
  );
}

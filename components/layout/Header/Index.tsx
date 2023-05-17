import { useNavigation } from '@react-navigation/native';
import { Box, CloseIcon, Flex, Pressable, Text } from 'native-base';
import { useCallback } from 'react';

interface ILayoutHeaderProps {
  title: string;
  showUser?: boolean;
  showClose?: boolean;
}

export default function LayoutHeader(props: ILayoutHeaderProps) {
  const navigation = useNavigation();

  const { title, showUser, showClose } = props;
  const navigateToDashboard = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: `Dashboard` as never }],
    });
  }, []);

  return (
    <Flex
      my={6}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Text
        fontFamily="UHCSerifSemiBold"
        fontSize="3xl"
        lineHeight="sm"
        color="uhcBlue.900"
        mr={4}
      >
        {title}
      </Text>
      {showUser && (
        <Box bgColor="uhcBrightBlue.900" p={2} rounded="full">
          <Text color="white" bold>
            HS
          </Text>
        </Box>
      )}
      {showClose && (
        <Pressable onPress={navigateToDashboard} mr={2}>
          <CloseIcon color="uhcGray.600" size={18} />
        </Pressable>
      )}
    </Flex>
  );
}

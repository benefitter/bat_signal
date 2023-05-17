import { Box, CloseIcon, HStack, Pressable, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
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
    <HStack
      my={6}
      space={2}
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Text fontFamily="UHCSerifSemiBold" fontSize="4xl" color="uhcBlue.900">
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
        <Pressable onPress={navigateToDashboard}>
          <CloseIcon color="black" size={18} />
        </Pressable>
      )}
    </HStack>
  );
}

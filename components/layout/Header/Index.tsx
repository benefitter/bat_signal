import { CloseIcon, HStack, Pressable, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

interface ILayoutHeaderProps {
  title: string;
  showUser?: boolean;
  showClose?: boolean;
}

export default function LayoutHeader(props: ILayoutHeaderProps) {
  const { title, showUser, showClose } = props;

  const navigation = useNavigation();

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
      <Text fontSize="4xl">{title}</Text>
      {showUser && <Text>LM</Text>}
      {showClose && (
        <Pressable onPress={navigateToDashboard}>
          <CloseIcon color="#000" size={18} />
        </Pressable>
      )}
    </HStack>
  );
}

import { useNavigation } from '@react-navigation/native';
import { CloseIcon, Pressable } from 'native-base';
import { useCallback } from 'react';

export default function CloseButton() {
  const navigation = useNavigation();

  const navigateToDashboard = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: `Dashboard` as never }],
    });
  }, []);

  return (
    <Pressable onPress={navigateToDashboard} mr={2} p={2}>
      <CloseIcon color="uhcGray.600" size={18} />
    </Pressable>
  );
}

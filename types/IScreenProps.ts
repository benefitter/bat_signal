import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Dasboard: undefined;
};

export default interface IScreenProps {
  navigation: NavigationProp<RootStackParamList>;
}

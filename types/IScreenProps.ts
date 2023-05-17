import { NavigationProp, RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Dashboard: { success: boolean };
};
type ScreenRouteProp = RouteProp<RootStackParamList, 'Dashboard'>;

export default interface IScreenProps {
  navigation: NavigationProp<RootStackParamList>;
  route: ScreenRouteProp;
}

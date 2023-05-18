// Imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard/Index';
import Describe from '../screens/Describe/Index';
import Submission from '../screens/Submission/Index';
import Camera from '../screens/Camera/Index';

export default function AppRoute() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Group>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Describe" component={Describe} />
            <Stack.Screen name="Camera" component={Camera} />
            <Stack.Screen name="Submission" component={Submission} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

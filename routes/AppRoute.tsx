// Imports
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/Dashboard/Index';
import Describe from '../screens/Describe/Index';
import Submission from '../screens/Submission/Index';
import Camera from '../screens/Camera/Index';
import SelectGroup from '../screens/SelectGroup/Index';
import React from 'react';

export default function AppRoute() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Dashboard"
        >
          <Stack.Group>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Camera" component={Camera} />
            <Stack.Screen name="Describe" component={Describe} />
            <Stack.Screen name="Submission" component={Submission} />
            <Stack.Screen
              name="SelectGroup"
              options={{
                presentation: 'modal',
              }}
            >
              {(props: any) => (
                <SelectGroup {...props} fromDocumentProcess={false} />
              )}
            </Stack.Screen>
            <Stack.Screen name="SelectGroupDocument">
              {(props: any) => (
                <SelectGroup {...props} fromDocumentProcess={true} />
              )}
            </Stack.Screen>
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

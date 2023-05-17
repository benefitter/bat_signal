import {
  HStack,
  NativeBaseProvider,
  Switch,
  Text,
  extendTheme,
  useColorMode,
  useColorModeValue,
} from 'native-base';
import React from 'react';
import { SafeAreaView } from 'react-native';
import AppRoute from './routes/AppRoute';

export default function App() {
  const backgroundColor = useColorModeValue('white', 'darkblue');
  const theme = extendTheme({
    colors: {
      uhcBlue: {
        600: '#002660',
        700: '#002666',
        800: '#002670',
        900: '#002676',
      },
    },
    config: {
      initialColorMode: 'light',
    },
  });
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView style={{ height: '100%', backgroundColor }}>
        <AppRoute />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

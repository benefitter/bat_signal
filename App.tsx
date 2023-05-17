import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NativeBaseProvider, useColorModeValue } from 'native-base';
import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import theme from './config/theme.config';
import AppRoute from './routes/AppRoute';
import { Provider } from 'react-redux';
import { store } from './store/store';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const backgroundColor = useColorModeValue('white', 'darkblue');

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          UHCSams: require('./assets/fonts/UHC-Sans-OTF/UHCSans-Medium.otf'),
          UHCSamsSemiBold: require('./assets/fonts/UHC-Sans-OTF/UHCSans-SemiBold.otf'),
          UHCSamsBold: require('./assets/fonts/UHC-Sans-OTF/UHCSans-Bold.otf'),
          UHCSerifSemiBold: require('./assets/fonts/UHC-Serif-OTF/UHCSerifHeadline-Semibold.otf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) await SplashScreen.hideAsync();
  }, [appIsReady]);

  if (!appIsReady) return null;

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <SafeAreaView
          style={{ height: '100%', backgroundColor }}
          onLayout={onLayoutRootView}
        >
          <AppRoute />
        </SafeAreaView>
      </NativeBaseProvider>
    </Provider>
  );
}

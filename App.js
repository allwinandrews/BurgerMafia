import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import SplashScreen from './src/screens/SplashScreen/index.js';
import HomeScreen from './src/screens/HomeScreen/index.js';
import MenuScreen from './src/screens/MenuScreen/index.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Home"
        screenOptions={({route, navigation}) => ({
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          headerStatusBarHeight:
            navigation
              .dangerouslyGetState()
              .routes.findIndex((r) => r.key === route.key) > 0
              ? 0
              : undefined,
          ...TransitionPresets.ModalPresentationIOS,
        })}>
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        <Stack.Screen name="Menu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

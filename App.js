import * as React from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import SplashScreen from './src/screens/SplashScreen/index.js';
import HomeScreen from './src/screens/HomeScreen/index.js';
import MenuScreen from './src/screens/MenuScreen/index.js';

const Stack = createStackNavigator();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
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
        {isSignedIn ? (
          <>
            <Stack.Screen name="Menu" component={MenuScreen} />
          </>
        ) : (
          <Stack.Screen name="Home">
            {({navigation}) => (
              <HomeScreen
                isSignedIn={isSignedIn}
                setIsSignedIn={setIsSignedIn}
                navigation={navigation}
              />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

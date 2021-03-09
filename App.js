import * as React from 'react';
import {lazy, Suspense, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {View} from 'react-native';

import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import MenuScreen from './src/screens/MenuScreen';
import DecisionScreen from './src/screens/DecisionScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isChef, setIsChef] = useState('');
  const [isAttendant, setIsAttendant] = useState('');

  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Login"
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
        {/* <Stack.Screen name="Decision">
          {({navigation}) => (
            <DecisionScreen navigation={navigation} userEmail={userEmail} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Menu" component={MenuScreen} /> */}
        {isSignedIn ? (
          <>
            <Stack.Screen name="Decision">
              {({navigation}) => (
                <DecisionScreen navigation={navigation} userEmail={userEmail} />
              )}
            </Stack.Screen>
            <Stack.Screen name="Menu" component={MenuScreen} />
          </>
        ) : (
          <Stack.Screen name="Login">
            {({navigation}) => (
              <LoginScreen
                isSignedIn={isSignedIn}
                setIsSignedIn={setIsSignedIn}
                navigation={navigation}
                setUserEmail={setUserEmail}
              />
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

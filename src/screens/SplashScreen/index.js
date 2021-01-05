import React, {useEffect} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setTimeout(() => {
        navigation.navigate('Home');
      }, 3000);
    }

    return function cleanup() {
      mounted = false;
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Burger Mafia</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBEA68',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
  },
});

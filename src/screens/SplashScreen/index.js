import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function SplashScreen({navigation}) {
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
    backgroundColor: '#FAC80D',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
  },
});

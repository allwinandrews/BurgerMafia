import React from 'react';
import {Button, StyleSheet, Text, View, StatusBar} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Button
        // onPress={onPressLearnMore}
        title="Customer [The Real King]"
        color="#000000"
      />
      <Button
        // onPress={onPressLearnMore}
        title="Burger King"
        color="#000000"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBEA68',
    paddingBottom: 10,
  },
});

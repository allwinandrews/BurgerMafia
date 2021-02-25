import React, {useState, useEffect} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

import SplashScreen from '../SplashScreen';

export default function HomeScreen({navigation}) {
  const [state, setState] = useState({
    username: '',
    password: '',
  });
  const [splash, setSplash] = useState(true);

  const handleLogin = () => {
    navigation.navigate('Menu');
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setTimeout(() => {
        setSplash(false);
      }, 2000);
    }

    return function cleanup() {
      mounted = false;
    };
  }, []);

  return splash ? (
    <SplashScreen />
  ) : (
    <View style={styles.container}>
      <TextInput
        value={state.username}
        onChangeText={(username) => setState({...state, username})}
        label="Email"
        style={styles.input}
      />
      <TextInput
        value={state.password}
        onChangeText={(password) => setState({...state, password})}
        label="Password"
        secureTextEntry={true}
        style={styles.input}
      />
      <View style={styles.button}>
        <Button color="black" title={'Login'} onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FAC80D',
  },
  button: {width: 300},
  input: {
    width: 300,
    height: 30,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  inputext: {
    width: 200,
    height: 44,
    padding: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

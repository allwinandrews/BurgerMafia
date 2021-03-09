import React, {useState, useEffect} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';

import auth from '@react-native-firebase/auth';

import SplashScreen from '../SplashScreen';

export default function LoginScreen(props) {
  const {navigation, isSignedIn, setIsSignedIn, setUserEmail} = props;
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const [splash, setSplash] = useState(true);

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(state.email, state.password)
      .then(() => {
        console.log('User account created & signed in!');
        setUserEmail(state.email);
        setIsSignedIn(true);
      })
      .catch((error) => {
        // if (error.code === 'auth/email-already-in-use') {
        //   console.log('That email address is already in use!');
        // }

        // if (error.code === 'auth/invalid-email') {
        //   console.log('That email address is invalid!');
        // }

        console.error(error);
      });
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

  useEffect(() => {
    if (isSignedIn)
      navigation.navigate('Decision', {
        email: state.email,
      });
  }, [isSignedIn]);

  return splash ? (
    <SplashScreen />
  ) : (
    <View style={styles.container}>
      <TextInput
        value={state.email}
        onChangeText={(email) => setState({...state, email})}
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
    height: 50,
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

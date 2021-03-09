import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';

import firestore from '@react-native-firebase/firestore';

import MenuScreen from '../MenuScreen';
import OrderScreen from '../OrderScreen';
import LoadingScreen from '../../components/LoadingScreen';

export default function DecisionScreen(props) {
  const [loader, setLoader] = useState(true);
  const {navigation, userEmail} = props;

  const [designation, setDesignation] = useState('');
  const [returnJsx, setReturnJsx] = useState(<></>);

  const getUsers = async () => {
    setLoader(true);
    const userCollection = await firestore().collection('users').get();
    const users = userCollection.docs.map((doc) => doc.data());
    const userDetails = users[0].employees.filter(
      (user) => user.email === userEmail,
    );
    setDesignation(userDetails[0].designation);
    setLoader(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (designation === 'chef') setReturnJsx(<OrderScreen />);
    else if (designation === 'attendant') setReturnJsx(<MenuScreen />);
  }, [designation]);

  return <>{loader === true ? <LoadingScreen /> : returnJsx}</>;
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

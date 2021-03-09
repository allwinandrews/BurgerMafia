import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';

import firestore from '@react-native-firebase/firestore';

import LoadingScreen from '../../components/LoadingScreen';
import OrderList from './OrderList';

export default function LoginScreen(props) {
  const [loader, setLoader] = useState(true);
  const [data, setData] = useState([]);

  const getOrders = async () => {
    setLoader(true);
    const orderCollection = await firestore().collection('orders').get();
    const orders = await orderCollection.docs.map((doc) => doc.data());

    console.log(orders);
    setData(orders);
    // const userDetails = users[0].employees.filter(
    //   (user) => user.email === userEmail,
    // );
    setLoader(false);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return loader === true ? (
    <LoadingScreen />
  ) : (
    <View style={styles.container}>
      <OrderList data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
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

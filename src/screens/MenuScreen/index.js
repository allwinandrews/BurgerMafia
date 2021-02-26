import React, {useState, useEffect} from 'react';
import {Alert, Keyboard, View, StyleSheet} from 'react-native';
import {TextInput, IconButton} from 'react-native-paper';

import FoodList from './FoodList';
import OrderModal from './OrderModal';

export default function MenuScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const menu = [
    {title: 'Corleone', price: 200, count: 0},
    {title: 'Corleone[cheese]', price: 220, count: 0},
    {title: 'Corleone DP', price: 300, count: 0},
    {title: 'Corleone DP[cheese]', price: 320, count: 0},
    {title: 'Al Capone', price: 160, count: 0},
    {title: 'Al Capone[cheese]', price: 180, count: 0},
    {title: 'Al Capone DP', price: 250, count: 0},
    {title: 'Al Capone DP[cheese]', price: 270, count: 0},
    {title: 'Yakuza TFB[CHKN]', price: 330, count: 0},
    {title: 'Yakuza TFB[BEEF]', price: 400, count: 0},
    {title: 'Clemenza', price: 140, count: 0},
  ];
  const [data, setData] = useState(menu);
  const [visible, setVisible] = React.useState(false);
  const [orders, setOrders] = useState([]);
  const [orderDisable, setOrderDisable] = useState(true);

  const onChangeSearch = (query) => {
    if (!query || query === ' ' || query === '') setData(menu);
    else {
      const newData = menu.filter((item) => {
        return item.title.toLowerCase().includes(query.toLowerCase());
      });
      console.log(newData, query);
      setData(newData);
    }
    setSearchQuery(query);
  };

  const handleCount = (title, count) => {
    if (isNaN(count)) {
      Alert.alert('Must input numbers');
      return false;
    }
    const newData = data.map((item) => {
      if (title === item.title) return {...item, count};
      else if (item.count === '') return {...item, count: 0};
      return item;
    });
    setData(newData);
    const orderList = newData.filter((item) => item.count > 0);
    setOrders(orderList);
  };

  const showModal = () => {
    Keyboard.dismiss();
    setVisible(true);
  };
  const hideModal = () => {
    Keyboard.dismiss();
    setVisible(false);
  };

  useEffect(() => {
    if (orders.length > 0) setOrderDisable(false);
    else setOrderDisable(true);
    // return () => {
    //   cleanup;
    // };
  }, [orders]);

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          flex: 1,
          paddingTop: 25,
          paddingBottom: 35,
          paddingLeft: 50,
        }}>
        <TextInput
          value={searchQuery}
          onChangeText={onChangeSearch}
          placeholder="Search"
          placeholderTextColor="white"
          theme={{colors: {text: 'white'}}}
          style={styles.input}
        />
        <IconButton
          size={40}
          backgroundColor="black"
          icon="menu"
          onPress={showModal}
          disabled={orderDisable}
        />
      </View>
      <FoodList data={data} handleCount={handleCount} />
      <OrderModal
        visible={visible}
        hideModal={hideModal}
        orders={orders}
        searchQuery={searchQuery}
        onChangeSearch={onChangeSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: '#FAC80D',
  },
  button: {width: 300},
  input: {
    width: 245,
    height: 30,
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'black',
    marginBottom: 10,
    paddingRight: 10,
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

import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Avatar, List, TextInput, Modal, Text} from 'react-native-paper';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

export default function OrderModal(props) {
  const {visible, hideModal, orders} = props;

  const [table, setTable] = useState('');
  const [confirmDisable, setConfirmDisable] = useState(true);

  const containerStyle = {
    backgroundColor: 'black',
    padding: 20,
    height: 650,
    borderRadius: 30,
    margin: 10,
    borderWidth: 5,
    borderColor: 'red',
  };

  const totalPrice = orders.reduce(
    (prevValue, currentValue) =>
      prevValue + currentValue.price * currentValue.count,
    0,
  );

  const handleConfirm = () => {
    const data = {tableNo: parseInt(table), orders};
  };

  useEffect(() => {
    if (table) setConfirmDisable(false);
    else setConfirmDisable(true);
    // return () => {
    //   cleanup;
    // };
  }, [table]);

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={containerStyle}>
      <View>
        <View
          style={{
            alignItems: 'center',
            paddingBottom: 20,
          }}>
          <Text style={{color: '#FAC80D', fontSize: 50}}>Orders</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 50,
          }}>
          <TextInput
            value={table}
            onChangeText={(count) => setTable(count)}
            placeholder="TABLE NO"
            placeholderTextColor="white"
            theme={{colors: {text: 'white'}}}
            keyboardType="numeric"
            // underlineColor="red"
            style={{
              width: 245,
              height: 30,
              padding: 10,
              borderWidth: 1,
              backgroundColor: 'black',
              borderColor: 'white',
              marginBottom: 15,
              paddingRight: 10,
            }}
          />
        </View>
      </View>
      <ScrollView
        style={{marginBottom: 10}}
        keyboardShouldPersistTaps="handled">
        {orders.map((item) => (
          <List.Item
            key={item.title}
            title={item.title + '(' + item.price + ')'}
            theme={{colors: {text: 'white'}}}
            description={'Price by count: ' + item.price * item.count}
            left={() => (
              <Avatar.Image
                size={63}
                source={require('../../../assets/images/burger.jpg')}
              />
            )}
            right={() => (
              <TextInput
                value={item.count.toString()}
                style={{width: 60, borderRadius: 10}}
                keyboardType="numeric"
                disabled
              />
            )}
          />
        ))}
      </ScrollView>
      <View
        style={{
          alignItems: 'center',
          paddingBottom: 1,
        }}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            backgroundColor: confirmDisable ? 'grey' : '#FAC80D',
            padding: 20,
            borderRadius: 30,
          }}
          disabled={confirmDisable}
          onPress={handleConfirm}>
          <Text style={{fontWeight: 'bold'}}>
            CONFIRM ORDER(PRICE:{totalPrice})
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

import React from 'react';
import {View} from 'react-native';
import {Avatar, List, TextInput} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

export default function FoodList(props) {
  const {orders} = props;

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{paddingLeft: 7, paddingRight: 7}}>
      {orders.map((item) => (
        <List.Item
          key={item.title}
          title={item.title + '(' + item.price + ')'}
          description={'Price by count: ' + item.price * item.count}
          left={() => (
            <Avatar.Image
              size={60}
              source={require('../../../../assets/images/burger.jpg')}
            />
          )}
          right={() => (
            <TextInput
              value={item.count.toString()}
              style={{width: 50, backgroundColor: 'black'}}
              theme={{colors: {text: 'white'}}}
              keyboardType="numeric"
              disabled
            />
          )}
        />
      ))}
    </ScrollView>
  );
}

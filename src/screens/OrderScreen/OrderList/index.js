import React, {useEffect, useState} from 'react';
import {Avatar, Checkbox, List, TextInput} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

import OrderListInOrderList from './OrderListInOrderList';

export default function OrderList(props) {
  const {data} = props;
  const [orders, serOrders] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  useEffect(() => {
    const orderData = data.map((item, index) => {
      const values = Object.values(item);
      const keys = Object.keys(item);
      const returnObj = {...values[0], orderName: keys[0]};
      return returnObj;
    });
    console.log(orderData);

    serOrders(orderData);
    //   return () => {
    //       cleanup
    //   }
  }, [data]);

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <List.Section style={{paddingLeft: 7, paddingRight: 7}}>
        {orders.map((item) => (
          <List.Accordion
            key={item.orderName}
            title={item.orderName}
            left={(props) => (
              <Avatar.Image
                size={63}
                source={require('../../../assets/images/burger.jpg')}
              />
            )}
            expanded={expanded}
            onPress={handlePress}>
            <OrderListInOrderList orders={item.orders} />
          </List.Accordion>

          //   <List.Item
          //     key={item.time}
          //     title={item.title + '(' + item.price + ')'}
          //     description={'Price by count: ' + item.price * item.count}
          //     left={() => (
          //       <Avatar.Image
          //         size={63}
          //         source={require('../../../assets/images/burger.jpg')}
          //       />
          //     )}
          //     // right={() => (
          //     //   <TextInput
          //     //     value={item.count.toString()}
          //     //     style={{width: 60, backgroundColor: 'black'}}
          //     //     theme={{colors: {text: 'white'}}}
          //     //     keyboardType="numeric"
          //     //     // onChangeText={(count) =>
          //     //     //   handleCount(item.title, parseInt(count))
          //     //     // }
          //     //   />
          //     // )}
          //   />
          //
        ))}
      </List.Section>
    </ScrollView>
  );
}

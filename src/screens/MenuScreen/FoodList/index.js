import React from 'react';
import {Avatar, List, TextInput} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

export default function FoodList(props) {
  const {data, handleCount} = props;

  return (
    <ScrollView>
      <List.Section style={{paddingLeft: 40, paddingRight: 37}}>
        {data.map((item) => (
          <List.Item
            key={item.title}
            title={item.title + '(' + item.price + ')'}
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
                style={{width: 60}}
                keyboardType="numeric"
                onChangeText={(count) => handleCount(item.title, parseInt(count))}
              />
            )}
          />
        ))}
      </List.Section>
    </ScrollView>
  );
}

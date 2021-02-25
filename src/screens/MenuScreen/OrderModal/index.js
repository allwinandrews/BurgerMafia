import React from 'react';
import {View} from 'react-native';
import {Avatar, List, TextInput, Modal, Text} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

export default function OrderModal(props) {
  const {visible, hideModal, orders, searchQuery, onChangeSearch} = props;

  const containerStyle = {backgroundColor: 'black', padding: 20, height: 550};

  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={containerStyle}>
      <View>
        <View
          style={{
            alignItems: 'center',
            paddingBottom: 20,
          }}>
          <Text style={{color: 'white'}}>Orders</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TextInput
            value={searchQuery}
            onChangeText={onChangeSearch}
            placeholder="TABLE NO"
            placeholderTextColor="white"
            theme={{colors: {text: 'white'}}}
            style={{
              width: 245,
              height: 30,
              padding: 10,
              borderWidth: 1,
              backgroundColor: 'black',
              borderColor: 'white',
              marginBottom: 10,
              paddingRight: 10,
            }}
          />
        </View>
        <ScrollView>
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
                  style={{width: 60}}
                  keyboardType="numeric"
                  disabled="true"
                />
              )}
            />
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
}

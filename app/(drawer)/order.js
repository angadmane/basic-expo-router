import { View, Text, TextInput, Button, StyleSheet, Alert, } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from 'expo-router';

export default function Page() {
  const navigation = useNavigation();
  const [orderName, setOrderName] = useState('');
  const [orderDate, setOrderDate] = useState('');
  const [mobile, setMobile] = useState('');
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrderData = async () => {
      try {
        const savedOrders = await AsyncStorage.getItem('orders');
        if (savedOrders) {
          setOrders(JSON.parse(savedOrders));
        }
      } catch (error) {
        console.error('Failed to load orders from AsyncStorage:', error);
      }
    };

    loadOrderData();
  }, []);

  const handleSave = async () => {
    try {
      const newOrder = { orderName, orderDate, mobile };
      const updatedOrders = [...orders, newOrder];
      setOrders(updatedOrders);
      navigation.navigate('(tabs)')
      await AsyncStorage.setItem('orders', JSON.stringify(updatedOrders));
      Alert.alert('Saved', 'Order data has been saved successfully!');
    } catch (error) {
      console.error('Failed to save order data to AsyncStorage:', error);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Order Name:</Text>
      <TextInput
        style={styles.textInput}
        value={orderName}
        onChangeText={setOrderName}
      />

      <Text style={styles.label}>Order Date:</Text>
      <TextInput
        style={styles.textInput}
        value={orderDate}
        onChangeText={setOrderDate}
      />

<Text style={styles.label}>Mobile:</Text>
      <TextInput
        style={styles.textInput}
        value={mobile}
        onChangeText={(text) => {
          if (/^\d{0,10}$/.test(text)) {
            setMobile(text);
          }
        }}
        keyboardType="numeric"
        maxLength={10}
      />

      <Button title="Save" onPress={handleSave} />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#f4f4f4',
    padding: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  cell: {
    flex: 1,
  },
});

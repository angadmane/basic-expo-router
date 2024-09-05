import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function OrderListPage() {
  const [orders, setOrders] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
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
    }, [])
  );

  const renderOrderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.orderName}</Text>
      <Text style={styles.cell}>{item.orderDate}</Text>
      <Text style={styles.cell}>{item.mobile}</Text>
    </View>
  );

  return (
    <FlatList
    data={orders}
    renderItem={renderOrderItem}
    keyExtractor={(item, index) => index.toString()}
    ListHeaderComponent={() => (
      <View style={styles.tableHeader}>
        <Text style={styles.headerCell}>Order Name</Text>
        <Text style={styles.headerCell}>Order Date</Text>
        <Text style={styles.headerCell}>Mobile</Text>
      </View>
    )}
    contentContainerStyle={styles.container}
  />
  );
}

const styles = StyleSheet.create({
  container: {
    
    padding: 20,
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

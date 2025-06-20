import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderHomeScreen from './OrderBuySell'; // Adjust the import path as necessary
import OrderBuySell from './OrderBuySell';
import OrderList from './OrderList';
import OrderDetail from './OrderDetail';

const Stack = createNativeStackNavigator();

export default function OrderStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrderList"
        component={OrderList}
        options={{ title: 'Emir Listeleme' }}
      />
      <Stack.Screen
        name="OrderBuySell"
        component={OrderBuySell}
        options={{ title: 'Alım Ekranı' }}
      />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
      <Stack.Screen name="OrderRisk" component={OrderHomeScreen} />
      <Stack.Screen name="OrderResult" component={OrderHomeScreen} />
    </Stack.Navigator>
  );
}

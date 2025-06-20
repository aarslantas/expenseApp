import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderHomeScreen from './OrderBuySell'; // Adjust the import path as necessary
import OrderBuySell from './OrderBuySell';
import OrderList from './OrderList';
import OrderDetail from './OrderDetail';
import { TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();

export default function OrderBuySellStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrderBuySell"
        component={OrderBuySell}
        options={({ navigation }) => ({
          title: 'Alım Ekranı',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 15 }}
            >
              <Ionicons
                name={Platform.OS === 'ios' ? 'chevron-back' : 'arrow-back'}
                size={28}
                color="#007AFF"
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="OrderDetail" component={OrderDetail} />
      <Stack.Screen name="OrderRisk" component={OrderHomeScreen} />
      <Stack.Screen name="OrderResult" component={OrderHomeScreen} />
    </Stack.Navigator>
  );
}

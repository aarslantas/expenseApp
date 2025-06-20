import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Al"
        onPress={() =>
          navigation.navigate('Order', {
            screen: 'OrderBuySell',
            params: {
              symbol: 'GARAN',
              price: 100,
              quantity: 10,
              type: 'buy',
            },
          })
        }
      />
    </View>
  );
}

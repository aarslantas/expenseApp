import React from 'react';
import { View, Text, Button } from 'react-native';

export default function OrderBuySell({ navigation, route }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Alım Ekranı</Text>
      <Button
        title="Devam et (Detay)"
        onPress={() =>
          navigation.navigate('OrderBuySellStack', {
            screen: 'OrderDetail',
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

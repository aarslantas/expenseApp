import React from 'react';
import { View, Text, Button } from 'react-native';

export default function PortfoyScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Ömer Asım ARSLANTAŞ
      </Text>
      <Button
        title="Buy AKBNK"
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

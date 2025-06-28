import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { StyleSheet } from 'react-native/types_generated/index';
import { GlobalStyles } from '../../constants/style';

function ExpenseItem({ description, amount, date }) {
  return (
    <Pressable>
      <View>
        <View>
          <Text>{description}</Text>
          <Text>{date}</Text>
        </View>
        <Text>{amount}</Text>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  exptenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: GlobalStyles.colors.primary200,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    elevation: 3,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: GlobalStyles.colors.primary400,
  },
});

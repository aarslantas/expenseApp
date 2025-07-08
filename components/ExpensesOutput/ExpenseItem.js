import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/style';
import { getFormattedDate } from '../../util/date';

function ExpenseItem({ id, description, amount, date }) {
  const navigation = useNavigation();

  function handleExpressItem() {
    navigation.navigate('ManageExpense', {
      expenseId: id,
      description: description,
      amount: amount,
      date: date,
    });
    console.log('Expense Item Pressed:', description, amount, date);
  }

  return (
    <Pressable
      onPress={handleExpressItem}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
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
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80,
    shadowColor: GlobalStyles.colors.primary200,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold',
  },
});

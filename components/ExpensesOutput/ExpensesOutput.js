import { View, Text, FlatList, StyleSheet } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

import { GlobalStyles } from '../../constants/style';

export const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'Groceries',
    amount: 50.0,
    date: new Date('2023-10-01'),
  },
  {
    id: 'e2',
    description: 'Rent',
    amount: 1200.0,
    date: new Date('2023-10-02'),
  },
  {
    id: 'e3',
    description: 'Utilities',
    amount: 200.0,
    date: new Date('2023-10-03'),
  },
];

function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
  let content = (
    <Text style={styles.infoText}>
      {fallbackText || 'No expenses found for the selected period.'}
    </Text>
  );

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} expensesPeriod={expensesPeriod} />
      {content}
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary100,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    marginTop: 32,
  },
});

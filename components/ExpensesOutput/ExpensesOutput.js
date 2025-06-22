import { View, Text, FlatList } from 'react-native';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

const DUMMY_EXPENSES = [
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
  return (
    <View>
      <ExpensesSummary
        expenses={DUMMY_EXPENSES}
        expensesPeriod={expensesPeriod}
      />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

import { FlatList } from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData) {
  console.log('Rendering Expense Item:', itemData);
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }) {
  return <FlatList data={expenses} renderItem={renderExpenseItem} />;
}

export default ExpensesList;

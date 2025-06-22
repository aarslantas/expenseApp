import { FlatList, View, Text } from 'react-native';

function renderExpenseItem(itemData) {
  return (
    <View>
      <Text>{itemData.item.description}</Text>
      <Text>{itemData.item.amount.toFixed(2)}</Text>
      <Text>{itemData.item.date.toDateString()}</Text>
    </View>
  );
}

function ExpensesList({ expenses }) {
  return <FlatList data={expenses} renderItem={renderExpenseItem} />;
}

export default ExpensesList;

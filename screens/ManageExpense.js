import React, { useLayoutEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import IconButton from '../components/ui/IconButton';
import { GlobalStyles } from '../constants/styles';
import Button from '../components/ui/Button';

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;

  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  const handleDeleteExpense = () => {
    // Logic to delete the expense goes here
    console.log('Expense deleted');
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };
  const handleConfirm = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode="flat" onPress={handleCancel} style={styles.button}>
          Cancel
        </Button>
        <Button mode="flat" onPress={handleConfirm} style={styles.button}>
          {isEditing ? 'Update' : 'Add '}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={handleDeleteExpense}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});

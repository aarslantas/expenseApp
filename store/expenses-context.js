import { createContext, useReducer } from 'react';
import { DUMMY_EXPENSES } from '../components/ExpensesOutput/ExpensesOutput';

const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  updateExpense: (id, { description, amount, date }) => {},
  deleteExpense: id => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [...state, { id, ...action.payload }];
    case 'UPDATE':
      return state.map(expense =>
        expense.id === action.payload.id
          ? { ...expense, ...action.payload.data }
          : expense,
      );
    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload.id);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expenses, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = expenseData => {
    dispatch({
      type: 'ADD',
      payload: expenseData,
    });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({
      type: 'UPDATE',
      payload: { id, data: expenseData },
    });
  };

  const deleteExpense = id => {
    dispatch({
      type: 'DELETE',
      payload: { id },
    });
  };

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        addExpense,
        updateExpense,
        deleteExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;

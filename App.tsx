/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AllExpenses from './screens/AllExpenses';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentExpenses from './screens/RecentExponses';
import ManageExpense from './screens/ManageExpense';
import { GlobalStyles } from './constants/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import IconButton from './components/ui/IconButton';
import ExpensesContextProvider from './store/expenses-context';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.primary500,
        },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => navigation.navigate('ManageExpense')}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="Home" size={size} color={color} />
          ),
        }}
      />
      {/* Add more tabs here as needed */}
    </BottomTabs.Navigator>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top', 'bottom']} style={{ flex: 1 }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ExpensesContextProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: GlobalStyles.colors.primary500,
                },
                headerTintColor: 'white',
              }}
            >
              <Stack.Screen
                name="ManageExpense"
                component={ManageExpense}
                options={{
                  presentation: 'modal',
                  headerTitle: 'Manage Expense',
                  headerStyle: {
                    backgroundColor: GlobalStyles.colors.primary500,
                  },
                  headerTintColor: 'white',
                }}
              />
              <Stack.Screen
                name="ExpensesOverview"
                component={ExpensesOverview}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ExpensesContextProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

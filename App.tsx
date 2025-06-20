/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
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
import { GlobalStyles } from './constans/styles';
import OrderStack from './screens/OrderBuySellStack';
import HomeScreen from './screens/HomeScreen';
import PortfoyScreen from './screens/PortfoyScreen';
import OrdersScreen from './screens/OrdersScreen';
import OrderBuySellStack from './screens/OrderBuySellStack';

const RootStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="OrdersTab" component={OrdersScreen} />
      <Tab.Screen name="Portföy" component={PortfoyScreen} />
      <Tab.Screen name="Settings" component={RecentExpenses} />
      <Tab.Screen name="News" component={RecentExpenses} />
    </Tab.Navigator>
  );
}

// function ExpensesOverview() {
//   return (
//     <BottomTabs.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: GlobalStyles.colors.primary500,
//         },
//         headerTintColor: GlobalStyles.colors.accent500,
//         tabBarStyle: {
//           backgroundColor: GlobalStyles.colors.primary500,
//         },
//         tabBarActiveTintColor: GlobalStyles.colors.accent500,
//       }}
//     >
//       <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} />
//       <BottomTabs.Screen name="AllExpenses" component={AllExpenses} />
//       {/* Add more tabs here as needed */}
//     </BottomTabs.Navigator>
//   );
// }

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="ExpensesOverview"
//             component={ExpensesOverview}
//             options={{
//               headerShown: false,
//             }}
//           />
//           <Stack.Screen name="ManageExpense" component={ManageExpense} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// }

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  function getTabBarStyle(route) {
    console.log('Current route:', route.name);
    const routeName = getFocusedRouteNameFromRoute(route);

    if (routeName && route.name === 'Order' && routeName !== 'OrderList') {
      return { display: 'none' }; // gizle
    }

    return {
      backgroundColor: GlobalStyles.colors.primary500,
    };
  }

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="Tabs"
            component={Tabs}
            options={({ route }) => ({
              headerShown: false,
              tabBarStyle: getTabBarStyle(route),
            })}
          />
          <RootStack.Screen
            name="OrderBuySellStack"
            component={OrderBuySellStack}
            options={{
              headerShown: false,
            }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

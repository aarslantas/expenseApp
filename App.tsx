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
import OrderStack from './screens/OrderStack';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

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
        <BottomTabs.Navigator
          screenOptions={({ route }) => ({
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary500,
            },
            headerTintColor: GlobalStyles.colors.accent500,
            tabBarStyle: getTabBarStyle(route),
            tabBarActiveTintColor: GlobalStyles.colors.accent500,
          })}
        >
          <BottomTabs.Screen name="Home" component={HomeScreen} />
          <BottomTabs.Screen
            name="Order"
            component={OrderStack}
            options={{
              headerShown: false, // OrderStack içinde kendi başlıkları var
            }}
          />
          <BottomTabs.Screen name="Portföy" component={RecentExpenses} />
          <BottomTabs.Screen name="Settings" component={RecentExpenses} />
          <BottomTabs.Screen name="News" component={RecentExpenses} />
          {/* Add more tabs here as needed */}
        </BottomTabs.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

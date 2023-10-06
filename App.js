import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Platform } from "react-native";
import { Provider } from "react-redux";

import BudgetListScreen from "./app/screens/BudgetListScreen";
import AddBudgetScreen from "./app/screens/AddBudgetScreen";
import EditBudgetScreen from "./app/screens/EditBudgetScreen";
import store from "./app/redux/store/store";
import BudgetDetailScreen from "./app/screens/BudgetDetailScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator
            initialRouteName="BudgetListScreen"
            screenOptions={{
              headerStyle: {
                justifyContent: "center",
                alignItems: "center",
              },
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen
              name="BudgetListScreen"
              component={BudgetListScreen}
              options={{ title: "Budget List" }}
            />
            <Stack.Screen
              name="AddBudgetScreen"
              component={AddBudgetScreen}
              options={{ title: "Add New Budget" }}
            />
            <Stack.Screen
              name="EditBudgetScreen"
              component={EditBudgetScreen}
              options={{ title: "Edit Budget" }}
            />
            <Stack.Screen
              name="BudgetDetailScreen"
              component={BudgetDetailScreen}
              options={{ title: "Budget Details" }}
            />
            {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
          </Stack.Navigator>
          <StatusBar style="light" />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: Platform.OS === "android" ? "12%" : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});

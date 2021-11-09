import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import Home from "./screens/Home";
import RestaurantDetails from "./screens/RestaurantDetails";
import OrderCompleted from "./screens/OrderCompleted";

const store = configureStore();

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="RestaurantDetails"
            component={RestaurantDetails}
          />
          <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

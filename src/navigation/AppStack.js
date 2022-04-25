import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

const App = createNativeStackNavigator();

const AppStack = () => {
  return (
    <App.Navigator initialRouteName="Home">
      <App.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </App.Navigator>
  );
};

export default AppStack;

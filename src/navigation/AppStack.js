import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import RootClientTabs from "./RootClientTabs";
import Search from "../screens/Search";
import Location from "../screens/Location";

const App = createNativeStackNavigator();

const AppStack = () => {
  return (
    <App.Navigator initialRouteName="RootClientTabs">
      <App.Screen
        name="RootClientTabs"
        component={RootClientTabs}
        options={{
          headerShown: false,
        }}
      />
      <App.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <App.Screen
        name="Location"
        component={Location}
        options={{
          headerShown: false,
        }}
      />
    </App.Navigator>
  );
};

export default AppStack;

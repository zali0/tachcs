import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";

import Ionicons from "react-native-vector-icons/Ionicons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import { COLORS } from "../constants";
import styled from "styled-components";
const Tab = createBottomTabNavigator();

const Container = styled(View)`
  background-color: #000;
  width: 100%;
  height: 100%;
`;
const RootClientTabs = () => {
  return (
    <Container>
      <Tab.Navigator
        // style={{ backgroundColor: "#000" }}
        screenOptions={({ route }) => ({
          //   backgroundColor: "#000",
          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: "black",
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => {
              return <Ionicons color={color} name="home" size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Bag"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: "Bag",
            tabBarIcon: ({ color, size }) => {
              return <Fontisto color={color} name="shopping-bag" size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Orders"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: "Orders",
            tabBarIcon: ({ color, size }) => {
              return <Feather color={color} name="list" size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Account"
          component={Home}
          options={{
            headerShown: false,
            tabBarLabel: "Account",
            tabBarIcon: ({ color, size }) => {
              return <Feather color={color} name="user" size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </Container>
  );
};

export default RootClientTabs;

import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import AntDesign from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import { COLORS } from "../constants";
import styled from "styled-components";
import Bag from "../screens/Bag";
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
              return <AntDesign color={color} name="home" size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Bag"
          component={Bag}
          options={{
            headerShown: false,
            tabBarLabel: "Bag",
            tabBarIcon: ({ color, size }) => {
              return (
                <SimpleLineIcons color={color} name="handbag" size={size} />
              );
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

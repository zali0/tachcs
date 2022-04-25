import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

const RootNavigator = () => {
  return (
    <NavigationContainer>
      {false ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;

import { View, Text } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoard from "../screens/OnBoard";
import OTP from "../screens/OTP";

const Auth = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Auth.Navigator initialRouteName="OnBoard">
      <Auth.Screen
        name="OnBoard"
        component={OnBoard}
        options={{
          headerShown: false,
        }}
      />
      {/* <Auth.Screen
        name="OTP"
        component={OTP}
        options={{
          headerShown: false,
        }}
      /> */}
    </Auth.Navigator>
  );
};

export default AuthStack;

import { SafeAreaView, StatusBar, View, Text, TextInput } from "react-native";
import React from "react";

import styled from "styled-components";
import { COLORS } from "../constants";

const Container = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

const Home = () => {
  return (
    <Container>
        <View>
            
        </View>
      <Text>Home</Text>
    </Container>
  );
};

export default Home;

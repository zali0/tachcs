import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";

import styled from "styled-components";

import { vw } from "react-native-css-vh-vw";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { COLORS } from "../constants";

const Container = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

const TopBar = styled(View)`
  margin: 10px;
  margin-top: 15px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const ScreenTitle = styled(Text)`
  font-size: 30px;
  font-weight: 700;
  color: ${COLORS.primary};
`;

const Line = styled(View)`
  width: 70%;
  height: 5px;
  background-color: #000;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  align-self: flex-end;
`;

const ProductInCart = styled(View)`
  width: 90%;
  height: ${vw(30)}px;
  margin-top: 10px;
  padding: 5px;
  align-self: center;
  background-color: #fff;
  border-radius: 10px;
  flex-direction: row;
`;
const Wrapper = styled(View)`
  width: 20%;
  height: 100%;
`;

const ProductImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
const Info = styled(View)``;

const InfoText = styled(View)``;
const ProductName = styled(Text)`
  font-weight: 700;
`;
const Manufacturer = styled(Text)``;

const Price = styled(Text)`
  margin-top: auto;
  color: ${COLORS.primary};
`;
const Function = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  width: 20%;
  padding: 5px;
  border-radius: 10px;
  background-color: ${COLORS.secondary};
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

const Minus = styled(Text)`
  color: #fff;
`;
const Quantity = styled(Text)`
  color: #fff;
`;
const Plus = styled(Text)`
  color: #fff;
`;
const Bag = () => {
  return (
    <View>
      <TopBar>
        <ScreenTitle>Your Bag</ScreenTitle>
      </TopBar>
      <Line />
      <ProductInCart>
        <Wrapper>
          <ProductImage
            source={{
              uri: "https://www.kwalitywalls.in/content/dam/unilever/heart/global/kw_in/oreo_thumbnails_product-1862856-png.png",
            }}
          />
        </Wrapper>

        <Info>
          <InfoText>
            <ProductName>Oreo Crush</ProductName>
            <Manufacturer>Cornetto</Manufacturer>
          </InfoText>
          <Price>$240</Price>
        </Info>
        <Function>
          <Minus>-</Minus>
          <Quantity>3</Quantity>
          <Plus>+</Plus>
        </Function>
      </ProductInCart>
    </View>
  );
};

export default Bag;

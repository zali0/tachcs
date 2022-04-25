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
  justify-content: space-between;
  align-items: center;
`;

const BackArrow = styled(Ionicons)`
  font-size: 30px;
  margin: 10px;
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

const SearchArea = styled(Pressable)`
  background-color: #fff;
  flex-direction: row;
  align-self: center;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 8px;
  margin-top: 10px;
`;

const StyledInput = styled(TextInput)`
  background-color: #fff;
  border-radius: ${vw(2)}px;
  color: #a0a0a0;
`;

const SearchIcon = styled(Ionicons)`
  font-size: 20px;
  color: #000;
`;
const LocationArea = styled(View)`
  width: 90%;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  margin: 20px;
`;

const MyLocationIcon = styled(MaterialIcons)`
  font-size: 40px;
  color: ${COLORS.primary};
  margin-right: 10px;
`;

const LocationName = styled(Text)`
  font-weight: 700;
  font-size: 16px;
`;

const SavedLocationTitle = styled(Text)`
  margin: 10px;
  font-weight: 700;
`;
const SavedLocationInfo = styled(View)``;
const SavedLocationName = styled(Text)`
  font-weight: 700;
  font-size: 16px;
`;
const SavedLocatonAddress = styled(Text)`
  font-size: 12px;
`;
const Location = ({ navigation }) => {
  return (
    <Container>
      <TopBar>
        <Pressable onPress={() => navigation.goBack()}>
          <BackArrow name="arrow-back" />
        </Pressable>
        <ScreenTitle>Tach</ScreenTitle>
      </TopBar>
      <Line />
      <SearchArea>
        <StyledInput
          // onChangeText={(text) => setUserName(text)}
          placeholder={"Search your place here"}
          autoFocus={false}
        />
        <SearchIcon name="search-outline" />
      </SearchArea>
      <LocationArea>
        <MyLocationIcon name="my-location" />
        <LocationName>Use Current location</LocationName>
      </LocationArea>
      <View>
        <SavedLocationTitle>Saved Locations</SavedLocationTitle>
        <LocationArea>
          <MyLocationIcon name="location-pin" />
          <SavedLocationInfo>
            <SavedLocationName>Home</SavedLocationName>
            <SavedLocatonAddress>
              1st Floor, 101 RM Towers, Bapujin...
            </SavedLocatonAddress>
          </SavedLocationInfo>
        </LocationArea>
        <LocationArea>
          <MyLocationIcon name="location-pin" />
          <SavedLocationInfo>
            <SavedLocationName>Office</SavedLocationName>
            <SavedLocatonAddress>
              1st Floor, 101 RM Towers, Bapujin...
            </SavedLocatonAddress>
          </SavedLocationInfo>
        </LocationArea>
        <LocationArea>
          <MyLocationIcon name="add-location-alt" />
          <SavedLocationInfo>
            <SavedLocationName>Add a new location</SavedLocationName>
            {/* <SavedLocatonAddress>
              1st Floor, 101 RM Towers, Bapujin...
            </SavedLocatonAddress> */}
          </SavedLocationInfo>
        </LocationArea>
      </View>
    </Container>
  );
};

export default Location;

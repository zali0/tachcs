import { SafeAreaView, StatusBar, View, Text, TextInput } from "react-native";
import React from "react";

import styled from "styled-components";

import { COLORS, deliveryGuy } from "../constants";

const Container = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.primary};
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

const DeliveryGuyImage = styled(deliveryGuy)`
  align-self: center;
  background-color: ${COLORS.primary};
`;

const Area = styled(View)`
  flex: 1;
  background-color: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

const TagLine = styled(Text)`
  margin: 10px;
  align-self: center;
  font-weight: 900;
  font-size: 17px;
`;

const PrimaryText = styled(Text)`
  color: ${COLORS.primary};
`;

const HeadingWrapper = styled(View)`
  width: 80%;
  flex-direction: row;
  align-self: center;
  justify-content: space-around;
  align-items: center;
`;

const HeadingText = styled(Text)`
  margin: 15px;
  font-size: 12px;
`;
const Line = styled(View)`
  flex: 1;
  height: 1px;
  background-color: ${COLORS.secondary};
`;

const InputArea = styled(View)`
  width: 80%;
  flex-direction: row;
  align-self: center;
  align-items: center;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: ${COLORS.grey};
`;

const Code = styled(Text)`
  font-weight: 700;
  margin-right: 10px;
`;

const Button = styled(View)`
  background-color: ${COLORS.primary};
  width: 80%;
  margin-top: 15px;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  align-items: center;
  padding: 15px;
  border-radius: 10px;
`;

const ButtonText = styled(Text)`
  color: #fff;
  font-weight: 700;
  font-size: 18px;
`;

const Note = styled(Text)`
  margin-top: auto;
  width: 80%;
  align-self: center;
  text-align: center;
  margin-bottom: 10px;
  font-size: 9px;
`;
const Number = styled(TextInput)`
  letter-spacing: 1px;
`;
const OnBoard = () => {
  return (
    <Container>
      <DeliveryGuyImage height={"40%"} />
      <Area>
        <TagLine>
          Delivering in <PrimaryText>21 Minutes</PrimaryText>
        </TagLine>
        <HeadingWrapper>
          <Line />
          <HeadingText>Login or Sign Up</HeadingText>
          <Line />
        </HeadingWrapper>
        <InputArea>
          <Code>+91</Code>
          <Number type="number" placeholder="Enter your Phone Number" />
        </InputArea>
        <Button>
          <ButtonText>Continue</ButtonText>
        </Button>
        <Note>
          By logging in, you agree to accept our{" "}
          <PrimaryText>Terms and services</PrimaryText>,{" "}
          <PrimaryText>Privecy policy</PrimaryText> and{" "}
          <PrimaryText>Content policy</PrimaryText>
        </Note>
      </Area>
    </Container>
  );
};

export default OnBoard;

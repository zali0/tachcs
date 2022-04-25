import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import OTPInputView from "@twotalltotems/react-native-otp-input";

import styled from "styled-components";
import { COLORS } from "../constants";

const Container = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

const BackArrow = styled(Ionicons)`
  font-size: 50px;
  margin: 10px;
`;

const Heading = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  align-self: center;
`;

const Desc = styled(Text)`
  align-self: center;
  font-weight: 700;
  font-size: 10px;
  margin-top: 40px;
  margin: 20px;
`;

const PrimaryText = styled(Text)`
  color: ${COLORS.primary};
`;

const StyledOTPVIew = styled(OTPInputView)`
  width: 80%;
  align-self: center;
  color: #000;
`;

const Time = styled.Text`
  align-self: center;
  font-weight: 700;
  font-size: 15px;
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
const ResendText = styled(Text)`
  color: ${COLORS.primary};
  align-self: center;
  margin-top: 15px;
  font-weight: 700;
  font-size: 13px;
`;
const OTP = () => {
  return (
    <Container>
      <BackArrow name="arrow-back" />
      <Heading>OTP Verification</Heading>
      <Desc>
        OTP has been sent to <PrimaryText>+91 939 001 6592</PrimaryText>
      </Desc>
      <StyledOTPVIew
        style={{ width: "80%", height: 200 }}
        pinCount={6}
        // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        // onCodeChanged = {code => { this.setState({code})}}
        autoFocusOnLoad={false}
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={(code) => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
      />

      <Time>
        0:<PrimaryText>30</PrimaryText>
      </Time>
      <Button>
        <ButtonText>Verify</ButtonText>
      </Button>
      <ResendText>Resend OTP</ResendText>
    </Container>
  );
};

export default OTP;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: COLORS.secondary,
  },

  underlineStyleBase: {
    color: "#000",
    fontSize: 20,
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 3,
    borderColor: COLORS.secondary,
  },

  underlineStyleHighLighted: {
    fontSize: 20,
    borderColor: COLORS.secondary,
  },
});

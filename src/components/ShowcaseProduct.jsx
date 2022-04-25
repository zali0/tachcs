import { View, Image, Text, ImageBackground } from "react-native";
import React from "react";
import styled from "styled-components";
import { COLORS, off } from "../constants";

const Container = styled(View)`
  width: 110px;
  height: 97%;
  background-color: #fff;
  padding: 5px;
  border-radius: 10px;
  elevation: 3;
  margin-left: 10px;
`;
const ProductImage = styled(Image)`
  width: 100%;
  height: 100px;
`;

const ProductName = styled(Text)`
  font-weight: 700;
  font-size: 14px;
`;
const Manufacturer = styled(Text)`
  font-weight: 700;
  color: #7c7c7c;
  font-size: 12px;
`;
const Prices = styled(View)`
  flex-direction: row;
`;
const Before = styled(Text)`
  font-weight: 700;
  color: ${COLORS.secondary};
  text-decoration: line-through;
  font-size: 14px;
  margin-right: 5px;
`;
const Price = styled(Text)`
  font-weight: 700;
  color: ${COLORS.primary};
  font-size: 18px;
`;
const AddButton = styled(View)`
  position: absolute;
  top: 3px;
  right: 3px;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${COLORS.primary};
`;
const AddButtonText = styled(Text)`
  font-size: 18px;
  color: #fff;
  align-self: center;
`;

const Function = styled(View)`
  position: absolute;
  top: 3px;
  right: 3px;
  width: 50%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  padding: 5px;
  background-color: ${COLORS.primary};
`;
const Minus = styled(Text)`
  color: #fff;
  font-size: 15px;
`;
const Plus = styled(Text)`
  color: #fff;
  font-size: 15px;
`;
const Current = styled(Text)`
  color: #fff;
  font-size: 15px;
`;
const Off = styled(ImageBackground)`
  width: 80%;
  height: 30px;
  position: absolute;
  top: 20%;
  left: -5px;
  justify-content: center;
`;
const OffText = styled(Text)`
  color: #fff;
  font-weight: 700;
  margin-left: 5px;
`;
const ShowcaseProduct = (props) => {
  const { item } = props;
  return (
    <Container>
      <ProductImage
        source={{
          uri: item.image,
        }}
      />
      <ProductName>{item.name}</ProductName>
      <Manufacturer>{item.manufacturer}</Manufacturer>
      <Prices>
        {item.before && <Before>₹{item.before}</Before>}
        <Price>₹{item.price}</Price>
      </Prices>
      <AddButton>
        <AddButtonText>+</AddButtonText>
      </AddButton>
      {/* <Function>
        <Minus>-</Minus>
        <Current>3</Current>
        <Plus>+</Plus>
      </Function> */}
      {item.off && (
        <Off source={off}>
          <OffText>{item.off}% OFF</OffText>
        </Off>
      )}
    </Container>
  );
};

export default ShowcaseProduct;

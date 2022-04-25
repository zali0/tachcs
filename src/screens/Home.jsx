import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";

import styled from "styled-components";
import { banner, chicken, COLORS, downWave, upWave } from "../constants";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import { vw } from "react-native-css-vh-vw";
import ShowcaseProduct from "../components/ShowcaseProduct";
import renderApplication from "react-native-web/dist/cjs/exports/AppRegistry/renderApplication";

const Container = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

const TopBar = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  margin-bottom: 0px;
`;
const Location = styled(View)`
  flex-direction: row;
`;
const ArrowLocationIcon = styled(FontAwesome5)`
  font-size: 25px;
  color: ${COLORS.primary};
  margin-right: 5px;
`;
const CurrentLocation = styled(Text)`
  font-size: 9px;
  margin-right: 5px;
`;

const DownArrowIcon = styled(Ionicons)`
  font-size: 16px;
`;
const Notification = styled(View)`
  position: relative;
`;

const NotificationIcon = styled(Ionicons)`
  font-size: 40px;
  color: #000;
`;

const NotificationCircle = styled(View)`
  position: absolute;
  top: -5px;
  right: -5px;
  width: ${vw(6)}px;
  height: ${vw(6)}px;
  border-radius: ${vw(100)}px;
  background-color: ${COLORS.primary};
  justify-content: center;
  align-items: center;
`;
const NotificationText = styled(Text)`
  color: #fff;
  font-size: 10px;
`;

const WelcomeText = styled(Text)`
  font-size: 18px;
  font-weight: 700;
  margin-left: 20px;
`;
const PrimaryText = styled(Text)`
  color: ${COLORS.primary};
`;

const SearchArea = styled(View)`
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

const Banners = styled(FlatList)`
  flex: 1;
  margin-top: 20px;
  margin-left: 10px;
`;

const Banner = styled(Image)`
  width: 300px;
  height: 100px;
  border-radius: 10px;
  margin-right: 10px;
`;

const Showcase = styled(View)`
  margin-left: 10px;
  margin-top: 20px;
  padding: 5px;
`;
const Wrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
`;

const ShwocaseTitle = styled(Text)`
  margin-bottom: 5px;
  font-weight: 700;
`;
const More = styled(Text)`
  font-size: 10px;
  color: ${COLORS.primary};
  font-weight: 700;
`;

const ShowcaseProducts = styled(FlatList)``;

const StyledScrollView = styled(ScrollView)`
  /* flex: 1; */
  height: 100%;
`;

const UpWave = styled(upWave)`
  height: 10px;
  width: 10px;
  margin-bottom: -5px;
`;
const CategoriesArea = styled(View)`
  background-color: ${COLORS.primary};
  width: 100%;
`;
const CategoriesTitle = styled(Text)`
  color: #fff;
  font-size: 18px;
  align-self: center;
  font-weight: 700;
`;
const Categories = styled(View)`
  background-color: ${COLORS.primary};
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Category = styled(View)`
  background-color: white;
  width: 30%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 4px;
  margin: 5px;
`;
const CategoryImage = styled(Image)`
  width: 60%;
  height: 40;
`;
const CategoryName = styled(Text)`
  color: #000;
  font-size: 10px;
`;
const DownWave = styled(downWave)`
  height: 10px;
  width: 10px;
  margin-top: -5px;
`;

const Special = styled(View)`
  width: 100%;
  background-color: ${COLORS.secondary};
  height: 220px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 10px;
`;
const Title = styled(Text)`
  color: #fff;
  font-weight: 700;
  margin-top: 12px;
  margin-bottom: 7px;
`;
const List = styled(FlatList)``;
const SpecialCategoryBanner = styled(View)`
  margin: 5px;
  width: 100px;
  height: 150px;
  background-color: ${COLORS.primary};
  border-radius: 10px;
`;

const Home = () => {
  const banners = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  const products = [
    {
      id: 1,
      image:
        "data:image/jpeg;base64,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",
      name: "Oreo Crush",
      manufacturer: "Cornetto",
      quantity: "200ml",
      price: 200,
      before: 210,
      off: 30,
    },
    {
      id: 2,
      image:
        "https://www.veggycation.com.au/siteassets/veggycationvegetable/coriander-leaves.jpg",
      name: "Corriander",
      manufacturer: null,
      quantity: "2pcs",
      price: 20,
      before: 25,
      off: null,
    },
    {
      id: 3,
      image:
        "https://www.veggycation.com.au/siteassets/veggycationvegetable/coriander-leaves.jpg",
      name: "Corriander",
      manufacturer: null,
      quantity: "2pcs",
      price: 20,
      before: 25,
      off: null,
    },
    {
      id: 4,
      image:
        "https://www.veggycation.com.au/siteassets/veggycationvegetable/coriander-leaves.jpg",
      name: "Corriander",
      manufacturer: null,
      quantity: "2pcs",
      price: 20,
      before: 25,
      off: null,
    },
  ];
  const renderBanner = ({ item }) => <Banner source={banner} />;
  const renderItem = ({ item }) => <ShowcaseProduct item={item} />;

  const renderSpecialBanners = ({ item }) => (
    <SpecialCategoryBanner></SpecialCategoryBanner>
  );

  return (
    <Container>
      <TopBar>
        <Location>
          <ArrowLocationIcon name="location-arrow" />
          <CurrentLocation>
            1st Floor, 101 RM Towers, Bapujin...
          </CurrentLocation>
          <DownArrowIcon name="ios-chevron-down" />
        </Location>
        <Notification>
          <NotificationIcon name="notifications-outline" />
          <NotificationCircle>
            <NotificationText>3</NotificationText>
          </NotificationCircle>
        </Notification>
      </TopBar>
      <StyledScrollView>
        <WelcomeText>
          Welcome <PrimaryText>Irfan</PrimaryText>
        </WelcomeText>
        <SearchArea>
          <StyledInput
            // onChangeText={(text) => setUserName(text)}
            placeholder={"Let your search do the walking..."}
          />
          <SearchIcon name="search-outline" />
        </SearchArea>
        <Banners
          data={banners}
          renderItem={renderBanner}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
        <Showcase>
          <Wrapper>
            <ShwocaseTitle>
              Looking for <PrimaryText>Breakfast?</PrimaryText>
            </ShwocaseTitle>
            <More>More {`${">"}`}</More>
          </Wrapper>
          <ShowcaseProducts
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </Showcase>
        <Showcase>
          <Wrapper>
            <ShwocaseTitle>
              <PrimaryText>Trending</PrimaryText> Near You
            </ShwocaseTitle>
            <More>More {`${">"}`}</More>
          </Wrapper>
          <ShowcaseProducts
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </Showcase>
        <UpWave />
        <CategoriesArea>
          <CategoriesTitle>Our Ranges</CategoriesTitle>
          <Categories>
            <Category>
              <CategoryImage source={chicken} />
              <CategoryName>Fruits & Vegetables</CategoryName>
            </Category>
            <Category>
              <CategoryImage source={chicken} />
              <CategoryName>Fruits & Vegetables</CategoryName>
            </Category>
            <Category>
              <CategoryImage source={chicken} />
              <CategoryName>Fruits & Vegetables</CategoryName>
            </Category>
            <Category>
              <CategoryImage source={chicken} />
              <CategoryName>Fruits & Vegetables</CategoryName>
            </Category>
            <Category>
              <CategoryImage source={chicken} />
              <CategoryName>Fruits & Vegetables</CategoryName>
            </Category>
          </Categories>
        </CategoriesArea>
        <DownWave />
        <Showcase>
          <Wrapper>
            <ShwocaseTitle>
              <PrimaryText>Hand Picked</PrimaryText> For You
            </ShwocaseTitle>
            <More>More {`${">"}`}</More>
          </Wrapper>
          <ShowcaseProducts
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </Showcase>
        <Special>
          <Title>
            <PrimaryText>Special</PrimaryText> Ones to Explore
          </Title>
          <List
            data={products}
            renderItem={renderSpecialBanners}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </Special>
        <Showcase>
          <Wrapper>
            <ShwocaseTitle>
              <PrimaryText>Hand Picked</PrimaryText> For You
            </ShwocaseTitle>
            <More>More {`${">"}`}</More>
          </Wrapper>
          <ShowcaseProducts
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </Showcase>
      </StyledScrollView>
    </Container>
  );
};

export default Home;

import { View } from "react-native";
import styled from "styled-components";
import RootNavigator from "./src/navigation/RootNavigator";

const Container = styled(View)`
  flex: 1;
`;
export default function App() {
  return (
    <Container>
      <RootNavigator />
    </Container>
  );
}

import react from "react";
import {View, Text, StyleSheet} from "react-native";
import {TouchableOpacity} from "react-native";
import styled from "styled-components/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
`;

const Title = styled.Text`
  color: ${(props) => props.theme.textColor};
`;

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = ({
  navigation: {navigate},
}) => (
  <Btn onPress={() => navigate("Stack", {screen: "Three"})}>
    <Title>Movies</Title>
  </Btn>
);

export default Movies;

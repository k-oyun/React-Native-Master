import AppLoading from "expo-app-loading";
import React, {useState} from "react";
import * as Font from "expo-font";
import {Text, Image} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Asset, useAssets} from "expo-asset";

export default function App() {
  //이전 방식처럼 loading중 특정 작업을 수행하지는 못함 but asset을 preload만 한다면 이 hook을 사용하는 것이 좋음!
  const [assets] = useAssets([require("./pig.jpeg")]);
  const [loaded] = Font.useFonts(Ionicons);
  //not ready state
  if (!assets || !loaded) {
    return <AppLoading />;
  }

  //ready state
  return <Text>we are done loading!</Text>;
}

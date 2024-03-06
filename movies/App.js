import AppLoading from "expo-app-loading";
import React, {useState} from "react";
import {Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import Tabs from "./navigation/Tabs";

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export default function App() {
  //apploading은 로딩이 끝날때까지 splash screen을 보여준다
  const [ready, setReady] = useState(false);

  //로딩이 끝나는 경우
  const onFinish = () => setReady(true);

  //로딩중인 경우 무엇을 할건지
  const startLoading = async () => {
    const fonts = loadFonts([Ionicons.font]);
    await Promise.all([...fonts]);
  };

  //not ready state
  if (!ready) {
    return (
      <AppLoading
        onFinish={onFinish}
        startAsync={startLoading}
        onError={console.error}
      />
    );
  }

  //ready state
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

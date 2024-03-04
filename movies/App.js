import AppLoading from "expo-app-loading";
import React, {useState} from "react";
import * as Font from "expo-font";
import {Text, Image} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Asset} from "expo-asset";

export default function App() {
  //apploading은 로딩이 끝날때까지 splash screen을 보여준다
  const [ready, setReady] = useState(false);

  //로딩이 끝나는 경우
  const onFinish = () => setReady(true);

  //로딩중인 경우 무엇을 할건지
  const startLoading = async () => {
    //Ionicon에 접근할 수 있음
    await Font.loadAsync(Ionicons.font);
    //local에 있는 이미지 가져오기
    await Asset.loadAsync(require("./pig.jpeg"));

    //서버에 있는 이미지 url로 가져오기
    await Image.prefetch(
      "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png"
    );
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
  return <Text>we are done loading!</Text>;
}

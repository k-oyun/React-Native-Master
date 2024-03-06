import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import {Text, View} from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => (
  //initialRouteName을 설정함으로써 첫 화면에 선택되어 있는 옵션을 선택할 수 있음
  //screenOptions을 설정함으로써 모든 tab의 라벨 스타일을 설정할 수 있음
  //tabBarLabelPosition을 설정함으로써 아이콘의 위치를 설정할 수 있음
  //option을 개별 tab label에 설정함으로써 개별 커스텀 가능
  //option에 tabbarBadge를 설정함으로써 빨간색 알림 모양을 설정할 수 있음
  //tabBarActiveTintColor을 설정함으로써 선택된 탭의 색상을 선택 할 수 잇음
  //tabBarInactiveTintColor도 사용 가능

  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {backgroundColor: "black"},
      tabBarActiveTintColor: "red",
      tabBarInactiveTintColor: "blue",
      headerRight: () => (
        <View>
          <Text>Hello</Text>
        </View>
      ),
    }}
  >
    <Tab.Screen
      name="Movies"
      component={Movies}
      options={{headerTitleStyle: {color: "tomato"}}}
    />
    <Tab.Screen name="Tv" component={Tv} options={{tabBarBadge: 5}} />
    <Tab.Screen name="Search" component={Search} />
  </Tab.Navigator>
);

export default Tabs;

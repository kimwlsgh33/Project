import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../screens/DetailScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import ScreenSetting from "../screens/ScreenSetting";
import BottomTab from "./BottomTab";
import PostScreen from "../screens/PostScreen";
import StoryScreen from "../screens/StoryScreen";
import Icon from "react-native-vector-icons/AntDesign";
import SettingStack from "../screens/SettingStack";

import SignUp from "../screens/SignUp";
import LoginScreen from "../screens/LoginScreen";
const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="SettingStackPage">
      <Stack.Screen
        name="Setting"
        component={ScreenSetting}
        options={{
          title: "설정",
          headerTitleAlign: "center",
          headerTintColor: "#FFFAFA",
          headerStyle: { backgroundColor: "#000000" },
          headerLeft: () => <Icon name={"left"} size={20} color="#FFFAFA" />,
        }}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="Story" component={StoryScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SettingStackPage" component={SettingStack} />
    </Stack.Navigator>
  );
}

export default RootStack;

{
  /*RootStack.js의 Stack.Navigator 뒤에 initialRouteName="화면이름" */
}

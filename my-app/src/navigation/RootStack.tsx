// React Basic
import React, { useEffect, useState } from "react";
// React Navigation
import { createStackNavigator } from "@react-navigation/stack";
// navigation
import HomeTab from "./HomeTab";
import OuterHomeTab from "./OuterHomeTab";
import ProfileTopTab from "./ProfileTopTab";
import FollowTab from "../components/profileComponents/FollowTab";
// Screens
import ScreenSetting from "../screens/setting/ScreenSetting";

import StoryScreen from "../screens/home/StoryScreen";
import SignUp from "../screens/signUp/SignUp";
import LoginScreen from "../screens/signIn/LoginScreen";
import EditProfile from "../components/profileComponents/EditProfile";
import DiscoverScreen from "../screens/search/DiscoverScreen";
import TOSScreen from "../screens/signUp/TOSScreen";
import CreateNameScreen from "../screens/signUp/CreateNameScreen";
import NameConfirm from "../screens/signUp/NameConfirm";
import BirthdayScreen from "../screens/signUp/BirthdayScreen";
import CompleteNScreen from "../screens/signUp/CompleteNScreen";
import LoginEr from "../screens/signUp/LoginEr";
import CodeCheck from "../screens/signUp/CodeCheck";
import CodeInput from "../screens/signUp/CodeInput";
import PwRe from "../screens/signUp/PwRe";
import AddUser2 from "../screens/setting/AddUser2";
import Bells2 from "../screens/setting/Bells2";
import Lock2 from "../screens/setting/Lock2";
import Safety2 from "../screens/setting/Safety2";
import Thema2 from "../screens/setting/Thema2";
import User2 from "../screens/setting/User2";
import PersonalData from "../screens/setting/PersonalData";
// navigation header 옵션 설정 파일
import { headerOptions } from "./navHeaderOptions";
import Modal from "../screens/profile/Modal";
import Modal2 from "../screens/profile/Modal2";
import Modal3 from "../screens/profile/Modal3";
import ProfileUser from "../screens/profile/ProfileUser";
import SearchResultScreen from "../screens/search/SearchResultScreen";
import { useMeStore } from "../store";
import Posts from "../components/screenComponents/Posts";
import AuthComp from "../screens/AuthComp";

import CommentScreen from "../screens/home/CommentScreen";
import ExpoFileSystem from "../screens/test/screens/ExpoFileSystem";

import { useColorScheme } from "react-native";

const Stack = createStackNavigator();

function RootStack() {
  const { me } = useMeStore();

  return (
    <Stack.Navigator
      screenOptions={{ ...headerOptions }}
      // initialRouteName="FS"
    >
      {!!me ? (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OuterHomeTab" component={OuterHomeTab} />
          <Stack.Screen name="Posts" component={Posts} />
          <Stack.Screen name="Story" component={StoryScreen} />
          <Stack.Screen
            name="Comment"
            component={CommentScreen}
            options={{
              presentation: "modal",
              gestureEnabled: true,
            }}
          />

          <Stack.Screen name="Discover" component={DiscoverScreen} />
          <Stack.Screen name="ProfileTopTab" component={ProfileTopTab} />
          <Stack.Screen name="FollowTab" component={FollowTab} />
          <Stack.Screen name="Setting" component={ScreenSetting} />
          <Stack.Screen name="AddUser2" component={AddUser2} />
          <Stack.Screen name="Bells2" component={Bells2} />
          <Stack.Screen name="Lock2" component={Lock2} />
          <Stack.Screen name="Safety2" component={Safety2} />
          <Stack.Screen name="User2" component={User2} />
          <Stack.Screen name="Thema2" component={Thema2} />
          <Stack.Screen name="PersonalData" component={PersonalData} />
          <Stack.Screen name="HomeTab" component={HomeTab} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="ProfileUser" component={ProfileUser} />
          <Stack.Screen name="SearchResult" component={SearchResultScreen} />
          <Stack.Screen
            name="Modal3"
            component={Modal3}
            options={{
              presentation: "transparentModal",
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Modal2"
            component={Modal2}
            options={{
              presentation: "transparentModal",
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Modal"
            component={Modal}
            options={{
              presentation: "transparentModal",
              animationEnabled: false,
            }}
          />
        </Stack.Group>
      ) : (
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="CodeCheck" component={CodeCheck} />
          <Stack.Screen name="CodeInput" component={CodeInput} />
          <Stack.Screen name="Birthday" component={BirthdayScreen} />
          <Stack.Screen name="PwRe" component={PwRe} />
          <Stack.Screen name="CreateName" component={CreateNameScreen} />
          <Stack.Screen name="CompleteN" component={CompleteNScreen} />
          <Stack.Screen name="NameConfirm" component={NameConfirm} />
          <Stack.Screen name="TOS" component={TOSScreen} />
          <Stack.Screen name="LoginEr" component={LoginEr} />
          <Stack.Screen name="AuthComp" component={AuthComp} />
        </Stack.Group>
      )}
      <Stack.Screen name="FS" component={ExpoFileSystem} />
    </Stack.Navigator>
  );
}

export default RootStack;

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "../screens/DetailScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import BottomTab from "./BottomTab";
import PostScreen from "../screens/PostScreen";
import StoryScreen from "../screens/StoryScreen";
import SignUp from "../screens/SignUp";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfile from "../screens/EditProfile";
import FollowTab from "../components/FollowTab";

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="Story" component={StoryScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen
        name="FollowTab"
        component={FollowTab}
        options={{ headerShown: true, title: "userID33" }}
      />
    </Stack.Navigator>
  );
}

export default RootStack;

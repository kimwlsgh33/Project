import React from "react";
import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { useMeStore } from "../store";

const AuthComp = ({ route }) => {
  const { setMe } = useMeStore();

  const finalSignIn = () => {
    setMe(route.params.user);
  };

  const LinearGradientProps = {
    colors: ["#FFB6C1", "#FFA07A"],
  };

  return (
    <LinearGradient
      colors={["#ffb6c1", "white", "#e774fb"]}
      style={styles.container}
      locations={[0, 0.5, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.TopBar}>
        <Pressable
          style={({ pressed }) => [
            Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
          ]}
          android_ripple={{ color: "#CCC" }}
          onPress={finalSignIn}
        >
          <Feather name="x" size={40} color="#000" />
        </Pressable>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#333",
              width: "100%",
            }}
          />
        </View>
      </View>
      <View style={styles.header}>
        <MaskedView
          style={{ flex: 1, flexDirection: "row", height: "100%" }}
          maskElement={
            <View
              style={{
                backgroundColor: "transparent",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign
                name="checkcircleo"
                size={50}
                color="white"
                style={styles.shadow}
              />
            </View>
          }
        >
          <LinearGradient
            colors={["green", "purple", "red"]}
            style={{ flex: 1 }}
            start={{ x: 0.1, y: 0.3 }}
            end={{ x: 0.6, y: 0.7 }}
          />
        </MaskedView>
        <Text style={styles.title}>?????????????????????!</Text>
        <Text style={styles.desc}>
          ?????? ??????, ?????? ??? ????????? ?????? ????????? ???????????? ??????????????????
          ???????????????.
        </Text>
      </View>
      <View style={styles.footer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
          ]}
          android_ripple={{ color: "#FFF" }}
          onPress={finalSignIn}
        >
          <Text style={styles.buttonText}>??????</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  TopBar: {
    flex: 0.15,
    alignItems: "flex-start",
    marginTop: 10,
  },
  header: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 18,
  },
  title: {
    fontFamily: "GangwonEduAllBold",
    fontSize: 30,
    marginTop: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  desc: {
    fontFamily: "GangwonEduAllLight",
    fontSize: 16,
    marginTop: 30,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  footerText: {
    fontFamily: "GangwonEduAllLight",
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    borderRadius: 10,
    width: "90%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "GangwonEduAllBold",
    fontSize: 16,
    color: "#fff",
  },
});

export default AuthComp;

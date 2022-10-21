//import { useNavigation } from "@react-navigation/native";
import React, {
  useState,
  useCallback,
  Component,
  useRef,
  useEffect,
} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Linking,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DataStore } from "@aws-amplify/datastore";

// function ExampleView(props) {
//   return <Icon name="ios-person" size={30} color="#4F8EF7" />;
// }

const SignUp = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(true);
  const [number, setNumber] = useState(1);

  const ref_input: Array<React.RefObject<TextInput>> = [];
  ref_input[0] = useRef(null);
  ref_input[1] = useRef(null);
  ref_input[2] = useRef(null);
  ref_input[3] = useRef(null);

  const Stack = createNativeStackNavigator();

  const navigation = useNavigation();

  const goHome = () => {
    navigation.navigate("BottomTab" as any);
  };

  const goLogin = () => {
    navigation.navigate("Login" as any);
  };

  const goTOS = async () => {
    console.log("TOS");
    // await DataStore.save(
    //   new User({
    //     username: "testing name",
    //     email: "testing@naver.com",
    //     password: "1234",
    //     followersID: "1234",
    //     likepostID: "1234",
    //   })
    // );
    // navigation.navigate("TOS" as any);
  };

  function counter() {
    const boot = useEffect(() => {
      increaseNumber(number);
    });
  }

  const handleIdChange = (text) => {
    setId(text);
  };

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleNickChange = (text) => {
    setNick(text);
  };

  const handlePwChange = (text) => {
    setPassword(text);
  };

  const idCheck = (id) => {
    handleIdChange(id);

    const regExp = /^[a-zA-Z0-9%-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;
    const phnum = /^[0-9]{10,11}$/;

    if (regExp.test(id) || phnum.test(id)) {
      increaseNumber(number);
      console.log(number);
    } else {
      setDisable(true);
    }
  };

  const nameCheck = (name) => {
    handleNameChange(name);

    const regExp = /^[a-zA-Z]{2,30}$/;

    if (regExp.test(name)) {
      increaseNumber(number);
      console.log(number);
    } else {
      setDisable(true);
    }
  };

  const nickCheck = (nick) => {
    handleNickChange(nick);

    const regExp = /^[a-zA-Z0-9%-_]{1,10}$/;

    if (regExp.test(nick)) {
      increaseNumber(number);
      console.log(number);
    } else {
      setDisable(true);
    }
  };

  const pwCheck = (password) => {
    handlePwChange(password);
    const reg =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (reg.test(password)) {
      increaseNumber(number);
      console.log(number);
      if (number >= 4) {
        if (name != null) setDisable(false);
      } else {
        setDisable(true);
      }
    } else {
      setDisable(true);
    }
  };

  const increaseNumber = (number) => setNumber(number + 1);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text
            style={{
              fontFamily: "BackToSchoolRegular",
              fontSize: 50,
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            Instagram
          </Text>
          <Text style={[styles.recommadText]}>
            친구들의 사진과 동영상을 보려면
          </Text>
          <Text style={[styles.recommadText]}>가입하세요.</Text>
          <View style={styles.buttonContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                styles.buttonOutline2,
                Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
              ]}
              onPress={() => Linking.openURL("http://facebook.com")}
              android_ripple={{ color: "#FFF" }}
            >
              <Text style={styles.buttonOutlineText}>
                <Icon name="logo-facebook" size={15} color="#FFF" />
                &nbsp;&nbsp;Facebook으로 로그인
              </Text>
            </Pressable>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "#ccc",
                width: "90%",
              }}
            />
            <View>
              <Text
                style={{
                  width: 50,
                  textAlign: "center",
                  color: "gray",
                  marginTop: 10,
                  marginBottom: 10,
                  fontFamily: "GangwonEduAllBold",
                  fontSize: 15,
                }}
              >
                또는
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "#ccc",
                width: "90%",
              }}
            />
          </View>
          <View>
            <TextInput
              placeholder="휴대폰 번호 또는 이메일 주소"
              style={[styles.input, styles.buttonOutline]}
              // value={id}
              returnKeyType="next"
              ref={ref_input[0]}
              onSubmitEditing={() => {
                ref_input[1].current.focus();
              }}
              onEndEditing={(e) => idCheck(e.nativeEvent.text)}
            />
            <TextInput
              placeholder="성명"
              style={[styles.input, styles.buttonOutline]}
              returnKeyType="next"
              ref={ref_input[1]}
              onSubmitEditing={() => {
                ref_input[2].current.focus();
              }}
              onEndEditing={(e) => nameCheck(e.nativeEvent.text)}
            />
            <TextInput
              placeholder="사용자 이름"
              style={[styles.input, styles.buttonOutline]}
              returnKeyType="next"
              ref={ref_input[2]}
              onSubmitEditing={() => {
                ref_input[3].current.focus();
              }}
              onEndEditing={(e) => nickCheck(e.nativeEvent.text)}
            />
            <TextInput
              placeholder="비밀번호"
              style={[styles.input, styles.buttonOutline]}
              secureTextEntry
              ref={ref_input[3]}
              //onSubmitEditing={Keyboard.dismiss}
              onChangeText={(e) => pwCheck(e)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                styles.buttonOutline2,
                Platform.select({ ios: { opacity: pressed ? 0.5 : 1 } }),
                disable ? { opacity: 0.5 } : {},
              ]}
              android_ripple={{ color: "#FFF" }}
              disabled={disable}
              onPress={goTOS}
            >
              <Text style={styles.buttonOutlineText}>가입</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.policyView}>
          <Text style={styles.policyText}>
            가입하면 Instagram의{" "}
            <Text style={styles.policyTextIm}>약관, 데이터</Text>
          </Text>
          <Text style={styles.policyText}>
            <Text style={styles.policyTextIm}>정책</Text> 및{" "}
            <Text style={styles.policyTextIm}>쿠키 정책</Text>에 동의하게 됩니
          </Text>
          <Text style={styles.policyText}>다.</Text>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={goLogin}>
            <Text style={{ fontFamily: "GangwonEduAllBold" }}>
              계정이 있으신가요? <Text style={styles.gologin}>로그인</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "ccc",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 10,
    fontFamily: "GangwonEduAllLight",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    // backgroundColor: "#0782F9",
    height: 50,
  },
  button: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 10,
    borderRadius: 10,

    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "#f9f9f9",
    marginTop: 5,
    borderColor: "#ccc",
    borderWidth: 1,
    fontSize: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  text: {
    color: "#404040",
    fontSize: 10,
    padding: 16,
    textAlign: "center",
  },
  link: {
    color: "#404040",
    fontWeight: "700",
    fontSize: 10,
    padding: 16,
    textAlign: "center",
  },
  buttonOutlineText: {
    color: "#FFF",
    fontSize: 15,
    fontFamily: "GangwonEduAllBold",
  },
  buttonOutline2: {
    backgroundColor: "#0782F9",
    borderColor: "#fff",
    borderWidth: 1,
  },
  bottomView: {
    marginTop: 40,
  },
  gologin: {
    color: "#0782F9",
  },
  recommadText: {
    fontSize: 20,
    color: "#999",
    textAlign: "center",
    marginBottom: 5,
    fontFamily: "GangwonEduAllBold",
  },
  policyView: {
    marginTop: 15,
  },
  policyText: {
    fontSize: 18,
    color: "#999",
    textAlign: "center",
    fontFamily: "GangwonEduAllBold",
  },
  policyTextIm: {
    fontWeight: "bold",
  },
});
export default SignUp;
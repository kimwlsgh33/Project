import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Linking,
  Modal,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import TextAndIcon from "../components/TextAndIcon";
import IconLeft from "../components/IconLeft";
// import useUserContext from "../hooks/useUserContext";
import { Auth } from "aws-amplify";
import { DataStore } from 'aws-amplify';

const navbars = [
  {
    navigateUri: "AddUser2",
    text: "친구 팔로우 및 초대",
    iconName: "right",
    iconName2: "adduser",
    iconSize: 20,
  },
  {
    navigateUri: "Bells2",
    text: "알림",
    iconName: "right",
    iconName2: "bells",
    iconSize: 20,
  },
  {
    navigateUri: "Lock2",
    text: "개인정보 보호",
    iconName: "right",
    iconName2: "lock",
    iconSize: 20,
  },
  {
    navigateUri: "Team2",
    text: "관리 감독",
    iconName: "right",
    iconName2: "team",
    iconSize: 20,
  },
  {
    navigateUri: "Safety2",
    text: "보안",
    iconName: "right",
    iconName2: "Safety",
    iconSize: 20,
  },
  {
    navigateUri: "AddUser2",
    text: "광고",
    iconName: "right",
    iconName2: "appstore-o",
    iconSize: 20,
  },
  {
    navigateUri: "User2",
    text: "계정",
    iconName: "right",
    iconName2: "user",
    iconSize: 20,
  },
  {
    navigateUri: "AddUser2",
    text: "도움말",
    iconName: "right",
    iconName2: "questioncircleo",
    iconSize: 20,
  },
  {
    navigateUri: "AddUser2",
    text: "소개",
    iconName: "right",
    iconName2: "infocirlceo",
    iconSize: 20,
  },
  {
    navigateUri: "Thema2",
    text: "테마",
    iconName: "right",
    iconName2: "skin",
    iconSize: 20,
  },
];

export default function ScreenSetting({ navigation, route }) {
  const [text, onChangeText] = useState("");
  const [ModalVisible, setModalVisible] = useState(false);
  const [ModalVisible2, setModalVisible2] = useState(false);
  const [ModalVisible3, setModalVisible3] = useState(false);

  // const [user, setUser] = useUserContext();
  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
      // setUser(null);
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }; 
  return (
    <ScrollView style={styles.container}>
      <View style={styles.menutextbox}>
        <View style={styles.InputView}>
          <AntDesign name={"search1"} size={20} color="#5c5c5c" />
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="검색"
            placeholderTextColor="#5c5c5c"
          />
        </View>
        {navbars.map((item, index) => (
          <Pressable
            onPress={() => {
              if (item.iconName2 == "team") {
                setModalVisible(true);
              } else {
                navigation.navigate(item.navigateUri);
              }
            }}
            key={index}
          >
            <TextAndIcon
              text={item.text}
              iconName={item.iconName}
              iconName2={item.iconName2}
              iconSize={item.iconSize}
            />
          </Pressable>
        ))}

          <Modal
            animationType="slide"
            visible={ModalVisible}
            transparent={true}
          >
            <SafeAreaView/>
            <Pressable style={{flex: 1, backgroundColor:'rgba(0,0,0,0.8)'}} onPress={() => setModalVisible(false)}>
              <View style={styles.ModalBox}>
                <ImageBackground source={require("../../assets/images/Meridian.jpg")} style={styles.bgImage}>
                    <View style={{marginLeft:5}}>
                      <Ionic name="md-close-outline" size={30} color="#ffffff"/>
                    </View>
                    <View style={styles.ModalBox1}>
                      <View style={{flexDirection: "row"}}>
                        <Ionic name="ios-infinite-outline" size={20} color="#ffffff"/>
                        <Text style={{color:"#ffffff"}}>Meta</Text>
                      </View>
                      <View>
                        <Text style={{color:"#ffffff"}}>Instagram 관리 감독</Text>
                      </View>
                      <View>
                        <Text style={{color:"#ffffff"}}>회원님이 관리 감독하는 계정</Text>
                      </View>
                      <View>
                        <Text style={{color:"#ffffff",marginBottom:5}}>회원님이 관리 감독하는 계정이 없습니다.</Text>
                        <Pressable
                          style={({ pressed }) => [pressed && { opacity: 0.4 }]}
                          onPress={() => Linking.openURL("https://naver.com")}>
                        <Text style={{color:"#013ADF", fontSize:12}}>더 알아보기</Text>
                        </Pressable>
                      </View>
                    </View>
                    <View style={{alignItems:'center'}}>
                    <View style={styles.AddAccount}>
                      <Pressable style={({ pressed }) => [pressed && { opacity: 0.4 },]}
                        onPress={() => Linking.openURL("https://naver.com")}>
                          <Text style={{color:"#013ADF",}}>계정 추가</Text>
                      </Pressable>
                    </View>
                    </View>
                    <View style={styles.ResourceBox}>
                      <Text style={styles.ResourceText}>리소스</Text>
                    </View>
                    <View style={{alignItems:"center"}}>
                      <View style={styles.ModalBox2}>
                        <View style={styles.ModalInnerBox2}>
                          <Text style={{color:"#ffffff"}}>교육 허브</Text>
                          <Ionic name={"ios-open-outline"} size={20} color="#ffffff" />
                        </View>
                        <View style={styles.ModalInnerBox2}>
                          <Text style={{color:"#ffffff"}}>고객 센터</Text>
                          <Ionic name={"ios-open-outline"} size={20} color="#ffffff" />
                        </View>
                        <View style={styles.ModalInnerBox2}>
                          <Text style={{color:"#ffffff"}}>Instagram 안전</Text>
                          <Ionic name={"ios-open-outline"} size={20} color="#ffffff" />
                        </View>
                      </View>
                    </View>
                </ImageBackground>
              </View>
            </Pressable>
          </Modal>

      </View>

      <View style={styles.footerContainer}>
        <IconLeft iconName={"rocket1"} iconSize={20} text="Meta" />
        <Pressable
          style={({ pressed }) => [pressed && { opacity: 0.4 }]}
          onPress={() => Linking.openURL("https://naver.com")}
          >
          <Text style={styles.Pressabletext}>계정 센터</Text>
        </Pressable>
        <Text style={styles.footertext}>
          {`스토리 및 게시물 공유, 로그인 등 Instagram, Facebook 앱,\nMessenger간에 연결된 환경에 대한 설정을 관리하세요.`}
        </Text>
      </View>
      <View style={styles.Overfooterbox}>
        <Text style={styles.Overfootertext}>로그인</Text>
        <Pressable onPress={() =>setModalVisible2(true)}>
        <Text style={styles.Pressabletext}>계정 추가</Text>
        </Pressable>
        <Pressable
        onPress={() => navigation.navigate("NavModal")}
        >
        <Text style={styles.Pressabletext}>로그아웃</Text>
        </Pressable>
      </View>

      <Modal 
          animationType="slide" 
          visible={ModalVisible2}
          transparent={true}>
        <Pressable style={{flex: 1, backgroundColor:'rgba(0,0,0,0.8)'}} onPress={() => setModalVisible2(false)}/>
        <View style={styles.Modal2Box}>
          <View style={styles.Modal2ViewBox1}>
            <Ionic name="ios-remove-outline" size={35} color="gray" />
            <Text style={{color: "#000000",marginBottom:15,fontWeight:"bold"}}>계정 추가</Text>
          </View>
          <View style={styles.Modal2ViewBox2}>
            <Pressable style={styles.ModalButton} onPress={() => [navigation.navigate("AnotherAc"),setModalVisible2(false)]}>
            <Text style={styles.Modaltext}>기존 계정으로 로그인</Text>
            </Pressable>
            <View style={{marginTop:10}}>
            <Pressable onPress={() => [navigation.navigate("SignUp"),setModalVisible2(false)]}>
            <Text style={{color:"#013ADF"}}>새 계정 만들기</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>

    <Modal
        animationType="fade"
        visible={ModalVisible3}
        transparent={true}
        style={{backgroundColor:"red"}}
        >
    <Pressable style={{flex: 1, backgroundColor:'rgba(0,0,0,0.8)'}} onPress={() => setModalVisible3(false)}/>
    <View style={{alignItems:"center"}}>
        <View style={{backgroundColor:"#333333",height:"50%", width:"50%",borderRadius:20}}>
            <Text style={{color:"#000000", fontWeight:"bold",fontSize:20}}>LINKER에서 로그아웃하시겠어요?</Text>  
          
          <Pressable
            onPress={() => navigation.navigate("NavModal")}
            >
            <Text style={{color:"#013ADF"}}>로그아웃</Text>
          </Pressable>
          <View>
            <Text style={{color:"#000000",}}>취소</Text>
          </View>
        </View>
    </View>
    </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },

  menutextbox: {
    borderTopColor: "#333333",
  },

  footerContainer: {
    justifyContent: "space-between",
  },

  footertext: {
    fontSize: 10,
    color: "#000000",
    fontWeight: "bold",
    margin: 15,
  },
  Overfooterbox: {
    backgroundColor: "#ffffff",
  },

  Overfootertext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000000",
    margin: 15,
  },

  Pressabletext: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#013ADF",
    margin: 15,
  },

  input: {
    fontWeight: "bold",
    paddingLeft: 10,
  },

  InputView: {
    marginTop: 15,
    marginLeft: 12,
    width: 360,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 4,
    backgroundColor: "#d1cdcd",
    borderRadius: 10,
  },

  ModalBox: {
    flex: 1,
    justifyContent: "flex-end"
  },

  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  ModalButton: {
    backgroundColor: "#0174DF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0174DF",
    width: "95%",
    height: "30%",
    alignItems:"center",
    justifyContent:"center"
  },

  Modaltext: {
    color: "#ffffff",
    fontWeight: "bold",
  },

  ModalInnerBox2: {
    flexDirection: "row",
    justifyContent:"space-between"
  },

  ModalBox2: {
    padding: 8,
    borderRadius:10,
    backgroundColor: "#769188",
    width: "95%", height:"45%",
    justifyContent:"space-around"
  },

  ResourceBox: {
    marginLeft: 15,
    marginTop:20,
    marginBottom:10, 
    width:"18%",
  },

  ResourceText: {
    fontWeight:"bold",
    fontSize: 15,
    color:"#ffffff"
  },

  AddAccount: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    backgroundColor:"#769188",
    width:"93%",
    borderRadius:10
  },

  ModalBox1: {
    height: 200,
    padding: 15,
    justifyContent: 'space-around'
  },

  Modal2Box: {
    backgroundColor:"#ffffff",
    height:"18%",
    alignItems:"center",
    width:"100%",
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },

  Modal2ViewBox1: {
    borderBottomWidth:1,
    borderBottomColor:"#666666",
    height:"40%",
    width:"100%",
    alignItems:"center",
    justifyContent:"space-around",
    backgroundColor:"#ffffff",
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },

  Modal2ViewBox2: {
    alignItems:"center",
    padding: 5,
    width: "100%",
    height:"100%",
  }

});

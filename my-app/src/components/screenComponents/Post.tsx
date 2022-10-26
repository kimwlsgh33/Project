import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  StyleSheet,
  Pressable,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import events from "../../libs/eventEmitter";
import Modal from "../Modal";
import ModalScreen from "../modal/ModalScreen";
import ShareModal from "../modal/ShareModal";
import LinkModal from "../modal/LinkModal";
import QrModal from "../modal/QrModal";
import FavoirteModal from "../modal/FavoriteModal";
import FollowModal from "../modal/FollowModal";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  addPost,
  bookMarkPost,
  deleteAllPosts,
  deletePost,
  followPost,
  favoritePost,
  addComment,
} from "../../store/slices";

const Post = () => {
  const navigation = useNavigation(); // 네비게이션을 쓰기 위한 두가지 방법 중 하나 hook

  const [userId, setUserId] = useState("");
  const [id, setId] = useState(0);
  const [myId, setMyId] = useState("nieoodie"); // 내 아이디
  const [mypostPersonImage, setMypostPersonImage] = useState(
    require("../../../assets/images/jinho.jpeg")
  ); // 내 프로필 사진

  // const [datas, setData] = useState(postInfo); // useState를 이용해 data라는 state를 만들어줌. postInfo를 넣어줌.
  //=======================================================
  //=======================================================
  //=======================================================
  const datas = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const addPostFunc = () => {
    dispatch(addPost);
  };

  const deletePostFunc = () => {
    dispatch(deletePost);
  };

  const deleteAllPostsFunc = () => {
    dispatch(deleteAllPosts);
  };

  //=======================================================
  //=======================================================
  //=======================================================
  const [modal, setModal] = useState<boolean>(false);
  const [shareModal, setShareModal] = useState<boolean>(false);
  const [linkModal, setLinkModal] = useState<boolean>(false);
  const [bookMark, setBookMark] = useState<boolean>(false);
  const [qrModal, setQrModal] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [follow, setFollow] = useState<boolean>(false);
  const [isFollowed, setIsFollowed] = useState<boolean>(false);

  const bookMarkPressed = useCallback(
    // 위와 같은 방식으로 북마크를 눌렀을 때의 함수를 만들어줌^^
    (id) => {
      dispatch(bookMarkPost(id));
      setBookMark((prev) => !prev);
    },
    []
  );

  const favoriteItem = (id) => {
    dispatch(favoritePost(id));
    setFavorite((prev) => !prev);
  };

  const addRecomment = ({
    recomment,
    id,
    recomment_id,
  }: {
    recomment: string;
    id: any;
    recomment_id: any;
  }) => {};

  const likePressed = useCallback(
    // likePressed라는 함수를 usecallback을 이용해 만들어줌.
    (id) => {
      // id를 인자로 받아옴.
      const newDatas = datas.map((data) => {
        // data라는 state를 map을 이용해 돌려줌.
        if (data.id === id) {
          // 만약 data의 id가 인자로 받아온 id와 같다면
          return {
            ...data, // 기존의 데이터를 그대로 가져옴.
            isLiked: !data.isLiked, // isLiked를 반대로 바꿔줌.
            likes: data.isLiked ? data.likes - 1 : data.likes + 1, // isLiked(현재 false)가 true면 -1, false면 +1
          };
        }
        return data; // 그 외의 경우는 그대로 data를 반환.
      });
      setData(newDatas); // setData를 이용해 state를 변경해줌.
    },
    [datas, setData] // data와 setData를 의존성 배열에 넣어줌.
  );

  const shareModalState = () => {
    setModal(false);
    setShareModal(true);
  };

  const linkModalState = () => {
    setModal(false);
    setLinkModal(true);
  };

  const save = (id) => {
    setModal(false);
    bookMarkPressed(id);
  };

  const qrModalState = () => {
    setModal(false);
    setQrModal(true);
  };

  const favoriteState = (id) => {
    setModal(false);
    favoriteItem(id);
  };

  useEffect(() => {
    console.log(datas[0].followList);
  }, [datas[0].followList]);

  const followState = (userId) => {
    dispatch(followPost(userId));
    setModal(false);
    setFollow(true);
  };

  // useEffect(() => {
  //   events.addListener("saveComment", dispatch(addComment({})));
  //   events.addListener("saveCommentLike", addRecommentLike);
  //   events.addListener("shareModal", shareModalState);
  //   events.addListener("linkModal", linkModalState);
  //   events.addListener("save", save);
  //   events.addListener("qrModal", qrModalState);
  //   events.addListener("favorite", favoriteState);
  //   events.addListener("follow", followState);

  //   return () => {
  //     events.removeListener("saveComment");
  //     events.removeListener("saveCommentLike");
  //     events.removeListener("shareModal");
  //     events.removeListener("linkModal");
  //     events.removeListener("save");
  //     events.removeListener("qrModal");
  //     events.removeListener("favorite");
  //     events.removeListener("follow");
  //   };
  // }, []);

  const addRecommentLike = ({
    id,
    recomment_id,
  }: {
    id: any;
    recomment_id: any;
  }) => {
    setData((prev) => {
      const Dera = prev.map((post) => {
        if (post.id === id) {
          const newRecomment = post.recomment.map((recomment) => {
            if (recomment_id === recomment.id) {
              const newObject = {
                ...recomment,
                recommentLike: !recomment.recommentLike,
                recommentLikeCount: recomment.recommentLike
                  ? recomment.recommentLikeCount - 1
                  : recomment.recommentLikeCount + 1,
              };
              return newObject;
            }
            return recomment;
          });
          return {
            ...post,
            recomment: newRecomment,
          };
        }
        return post;
      });
      return Dera;
    });
  };

  return (
    <View style={{ paddingBottom: 40 }}>
      {datas.map((data) => {
        // data라는 state를 map을 이용해 돌려줌.
        return (
          // return을 이용해 화면에 뿌려줌.
          <View
            key={data.id} // key를 이용해 각각의 데이터를 구분해줌.
            style={{
              paddingBottom: 10,
              borderBottomColor: "gray",
              borderBottomWidth: 0.1,
            }}
          >
            <View style={styles.view1}>
              <TouchableOpacity>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={data.postPersonImage}
                    style={{ width: 40, height: 40, borderRadius: 100 }}
                  />
                  <View style={{ paddingLeft: 5 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      {data.userId}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={{ flexDirection: "row" }}>
                {data.favorite ? (
                  <Pressable
                    onPress={() => {
                      setIsFavorite(true);
                    }}
                  >
                    <Ionicons
                      name="star-half"
                      style={{ fontSize: 20, marginRight: 10 }}
                    />
                  </Pressable>
                ) : null}
                <Pressable
                  onPress={() => {
                    setModal(true);
                    setId(data.id);
                    setUserId(data.userId);
                  }}
                >
                  <Feather name="more-horizontal" style={{ fontSize: 20 }} />
                </Pressable>
              </View>
            </View>

            <View style={styles.view2}>
              <Image
                source={data.postImage}
                style={{ width: "100%", height: 380 }}
              />
            </View>
            <View style={styles.view3}>
              <TouchableOpacity
                onPress={() => {
                  likePressed(data.id); // likePressed 함수를 호출해줌. 인자로 data의 id를 넣어줌.
                }}
              >
                <AntDesign
                  name={data.isLiked ? "heart" : "hearto"}
                  style={{
                    paddingRight: 10,
                    fontSize: 25,
                    color: data.isLiked ? "red" : "black",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather
                  onPress={() => {
                    navigation.navigate("Comment", {
                      user: data.user,
                      id: data.id,
                      text: data.text,
                      // userId: data.userId,
                      // postPersonImage: data.postPersonImage,
                      // me: me, <==== context
                      comment: data.comment,
                    });
                  }}
                  name="message-circle"
                  style={{ fontSize: 25, paddingRight: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Feather
                  name="send"
                  style={{ fontSize: 25, paddingRight: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  bookMarkPressed(data.id);
                }}
              >
                <FontAwesome
                  name={data.bookMark ? "bookmark" : "bookmark-o"}
                  style={{
                    fontSize: 25,
                    position: "absolute",
                    left: 250,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ paddingLeft: 5 }}>
              <Text style={{ fontWeight: "bold" }}>좋아요 {data.likes}개</Text>
            </View>
            <View style={{ flexDirection: "row", paddingLeft: 5 }}>
              <Text style={{ fontWeight: "bold" }}>{data.userId}</Text>
              <Text style={{ paddingLeft: 5, paddingRight: 5, flexShrink: 1 }}>
                {data.comment}
              </Text>
            </View>

            <View style={styles.view3}>
              {data.recomment[0]?.recomment == null ? null : (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Comment", {
                      comment: data.comment, //data의 comment를 인자로 넘겨줌. --> 누른 친구의 comment
                      userId: data.userId, // data의 userId를 인자로 넘겨줌.
                      postPersonImage: data.postPersonImage, // data의 postPersonImage를 인자로 넘겨줌.
                      myId: myId, // myId를 인자로 넘겨줌.
                      mypostPersonImage: mypostPersonImage, // mypostPersonImage를 인자로 넘겨줌.
                      id: data.id, // data의 id를 인자로 넘겨줌.
                      recomment: data.recomment, // data의 recomment를 인자로 넘겨줌.
                    });
                  }}
                >
                  <Text style={styles.text1}>
                    {data.recommentCount == 0
                      ? null
                      : `댓글 ${data.recommentCount} 개 모두 보기`}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={styles.view4}>
              {data.recomment[0]?.recomment == null ? null : (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Comment", {
                      comment: data.comment,
                      userId: data.userId,
                      postPersonImage: data.postPersonImage,
                      myId: myId,
                      mypostPersonImage: mypostPersonImage,
                      id: data.id,
                      recomment: data.recomment,
                    });
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontWeight: "bold" }}>
                      {data.recomment[0]?.recomment == null
                        ? null
                        : data.userId}
                    </Text>
                    <View style={styles.view5}>
                      <Text>{data.recomment[0]?.recomment}</Text>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                      <TouchableOpacity
                        onPress={() => {
                          addRecommentLike({
                            id: data.id,
                            recomment_id: data.recomment[0]?.id,
                          });
                        }}
                      >
                        <AntDesign
                          name={
                            data.recomment[0]?.recommentLike
                              ? "heart"
                              : "hearto"
                          }
                          color={
                            data.recomment[0]?.recommentLike ? "red" : "black"
                          }
                          style={{ paddingHorizontal: 7 }}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </View>
        );
      })}

      <Modal Visible={modal} setVisible={setModal}>
        <ModalScreen
          id={id}
          bookMark={bookMark}
          favorite={favorite}
          follow={isFollowed}
          userId={userId}
        />
      </Modal>
      <Modal Visible={shareModal} setVisible={setShareModal}>
        <ShareModal />
      </Modal>
      <Modal Visible={linkModal} setVisible={setLinkModal}>
        <LinkModal />
      </Modal>
      <Modal Visible={qrModal} setVisible={setQrModal}>
        <QrModal />
      </Modal>
      <Modal Visible={isFavorite} setVisible={setIsFavorite}>
        <FavoirteModal />
      </Modal>
      <Modal Visible={follow} setVisible={setFollow}>
        <FollowModal data={datas} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    height: 60,
  },

  view2: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  view3: {
    flexDirection: "row",
    paddingVertical: 5,
    paddingLeft: 5,
  },
  text1: {
    fontWeight: "bold",
    color: "gray",
    letterSpacing: 0.001,
  },
  view4: {
    paddingLeft: 5,
    paddingTop: 4,
    height: 30,
    flexShrink: 1,
    justifyContent: "center",
  },
  view5: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
});

export default Post;

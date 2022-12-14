import { FunctionComponent } from "react";
import { Linking } from "react-native";
import { State } from "react-native-gesture-handler";
import { List } from "react-native-paper";
import create from "zustand";
import Modal from "../components/Modal";
import { Comment } from "../models";

import { User, Post } from "../models";
type ModalStoreType = {
  modal: boolean;
  shareModal: boolean;
  linkModal: boolean;
  bookMark: boolean;
  qrModal: boolean;
  favorite: boolean;
  isFavorite: boolean;
  follow: boolean;
  isFollowed: boolean;

  setModal: (modal: boolean) => void;
  setShareModal: (shareModal: boolean) => void;
  setLinkModal: (linkModal: boolean) => void;
  setBookMark: (bookMark: boolean) => void;
  setQrModal: (qrModal: boolean) => void;
  setFavorite: (favorite: boolean) => void;
  setIsFavorite: (isFavorite: boolean) => void;
  setFollow: (follow: boolean) => void;
  setIsFollowed: (isFollowed: boolean) => void;
};

export const useModalStore = create<ModalStoreType>((set) => ({
  modal: false,
  shareModal: false,
  linkModal: false,
  bookMark: false,
  qrModal: false,
  favorite: false,
  isFavorite: false,
  follow: false,
  isFollowed: false,

  setModal: (modal) => set(() => ({ modal: !modal })),
  setShareModal: (shareModal) => set(() => ({ shareModal: !shareModal })),
  setLinkModal: (linkModal) => set(() => ({ linkModal: !linkModal })),
  setBookMark: (bookMark) => set(() => ({ bookMark: !bookMark })),
  setQrModal: (qrModal) => set(() => ({ qrModal: !qrModal })),
  setFavorite: (favorite) => set(() => ({ favorite: !favorite })),
  setIsFavorite: (isFavorite) => set(() => ({ isFavorite: !isFavorite })),
  setFollow: (follow) => set(() => ({ follow: !follow })),
  setIsFollowed: (isFollowed) => set(() => ({ isFollowed: !isFollowed })),
}));

type MeStoreType = {
  me: User;
  setMe: (me: User) => void;
  addBookMark: (post_id: string) => any;
  // likePost: (post: Post) => any;
  // following: (id: string) => any;
  favorite: (id: string) => any;
};

export const useMeStore = create<MeStoreType>((set) => ({
  me: null,
  setMe: (me) => set(() => ({ me })),
  addBookMark: (post_id) => {
    set((state) => ({
      me: {
        ...state.me,
        bookMark: state.me.bookMark.includes(post_id)
          ? state.me.bookMark.filter((id) => {
              id != post_id;
            })
          : [...state.me.bookMark, post_id],
      },
    }));
  },
  // likePost: (post: Post) => {
  //   set((state) => ({
  //     me: {
  //       ...state.me,
  //       likes: [...state.me.likes, post],
  //     },
  //   }));
  // },

  // ?????? ????????? ?????? ????????? ???????????? ????????? ??????
  // following: (id) => {
  //   set((state) => ({
  //     me: {
  //       ...state.me,
  //       following: state.me.
  //     },
  //   }));
  // },

  // ?????? ????????? ?????? ????????? ???????????? ????????? ??????
  // follower: (id) =>
  //   set((state) => ({
  //     me: {
  //       ...state.me,
  //       followers: [...state.me.followers, id],
  //     },
  //   })),

  // ???????????? ??? ????????? ???????????? ????????? ??????
  favorite: (id) =>
    set((state) => ({
      me: {
        ...state.me,
        favorite: state.me.favorite.includes(id)
          ? state.me.favorite.filter((id) => id != id)
          : [...state.me.favorite, id],
      },
    })),
}));

type PostStoreType = {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  addPost: (post: Post) => void;
  addComment: ({
    comment,
    postId,
  }: {
    comment: Comment;
    postId: string;
  }) => void;
  addLikeUser: ({
    user_id,
    post_id,
  }: {
    user_id: string;
    post_id: string;
  }) => void;

  addClick: ({
    post_id,
    user_id,
  }: {
    post_id: string;
    user_id: string;
  }) => void;
};

export const usePostStore = create<PostStoreType>((set) => ({
  posts: [],
  setPosts: (posts) => set(() => ({ posts })),
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  addComment: ({ comment, postId }) =>
    set((state) => ({
      posts: state.posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            Comments: [...post.Comments, comment],
          };
        }
        return post;
      }),
    })),

  addLikeUser: ({ user_id, post_id }) =>
    set((state) => ({
      posts: state.posts.map((post) => {
        if (post.id === post_id) {
          return {
            ...post,
            likes: post.likes.includes(user_id)
              ? post.likes.filter((id) => id !== id)
              : [...post.likes, user_id],
          };
        }
        return post;
      }),
    })),

  // ?????? ??? ?????? ?????? ?????????
  addClick: ({ post_id, user_id }) => {
    set((state) => ({
      posts: state.posts.map((post) => {
        if (post.id === post_id) {
          return {
            ...post,
            clicked: post.clicked.includes(user_id)
              ? post.clicked
              : [...post.clicked, user_id],
          };
        }
        return post;
      }),
    }));
  },
}));

// 0. ?????? ??? ?????? ?????? ?????? ?????????
// 1. ?????? ??????.
// 2. ?????? ??? 1 ??????

import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

type SearchReelProps = {
  POST_WIDTH: number;
  uri: string;
};

function SearchReel({ POST_WIDTH, uri }: SearchReelProps) {
  return (
    <TouchableOpacity
      style={{
        width: POST_WIDTH,
        height: POST_WIDTH * 2,
      }}
    >
      <Image
        source={{ uri }}
        style={{
          width: POST_WIDTH,
          height: POST_WIDTH * 2 + 3,
        }}
      />
      <View
        style={{
          position: "absolute",
          left: 13,
          bottom: 5,
        }}
      >
        <Icon name="videocam" size={25} color="white" />
      </View>
    </TouchableOpacity>
  );
}

export default SearchReel;

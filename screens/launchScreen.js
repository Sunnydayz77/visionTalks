import React from "react";
import { View, Image } from "react-native";

export default function LaunchScreen() {
  return (
    <View>
      <Image source={require("../assets/dummyLogo.png")} />
    </View>
  );
}

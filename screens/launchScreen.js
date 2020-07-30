import React from "react";
import { Image } from "react-native";

export default function LaunchScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/dummyLogo.png")} />
      <StatusBar style="auto" />
    </View>
  );
}

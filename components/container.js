import React from "react";
import { StyleSheet, View} from "react-native";
import AboutScreen from "../screens/about";
import Header from "./header";
// import LaunchScreen from "../screens/launchScreen";

export default function Container() {
  return (
    <View style={styles.container}>
      <Header />
      <AboutScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efeff0",
    alignItems: "center",
    justifyContent: "center",
  },
});
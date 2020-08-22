import React from "react";
import { View, Image, StyleSheet, Linking } from "react-native";

export default function Header() {
  return (
    <View style={styles.logo}>
      <Image
        source={require("../assets/dummyLogo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    // flex: 1,
    backgroundColor: "#efeff0",
    alignItems: "center",
    marginBottom: 0,
    height: 50,
  },
});

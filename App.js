import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Container from "./components/container";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Container />
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

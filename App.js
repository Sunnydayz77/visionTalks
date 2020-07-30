import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import LaunchScreen from './screens/launchScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <LaunchScreen/>
      <StatusBar style="auto" />
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

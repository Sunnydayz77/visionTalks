import React from "react";
import { View, Image, Text, StyleSheet, Linking, Button } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/screens/easy.jpg")}
      />
      <Text style={styles.text}>
        Set and track all of your most important goals on one app.
      </Text>

      <Image
        style={styles.image}
        source={require("../assets/screens/community.jpg")}
      />
      <Text style={styles.text}>
        Collaborate with others to reach your goals and help them achieve theirs
      </Text>

      <Button
        style={styles.button}
        // onPress={onPressLearnMore}
        title="Next"
        // color="#841584"
        accessibilityLabel="Begin onboarding process"
      />
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
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // height: 2,
    width: 250,
    borderRadius: 200,
    marginTop: 25,
  },
  text: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
  },
  button: {
    textAlign: "center",
    backgroundColor: "#efeff0",
    color: "white",
    marginBottom: 100,
  },
});

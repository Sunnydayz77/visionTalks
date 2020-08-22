import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

export default function SignUpScreen() {
  const [value, onChangeText] = React.useState("Email Address");

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />

      <Button
        style={styles.button}
        // onPress={onPressLearnMore}
        title="Sign Up"
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
  button: {
    textAlign: "center",
    backgroundColor: "#efeff0",
    color: "white",
  },
});

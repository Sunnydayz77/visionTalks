import React from "react";
import {Text, Image} from "react-native"

export default function LandingPage() {
  return (
    <View>
      <Image source={require('..assets/dummyLogo.png')} />
      <Text>Achieving Your Goal</Text>
     <StatusBar style="auto" />
    </View>
  );
}

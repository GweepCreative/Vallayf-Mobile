import { View, Text, Image } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function _layout() {
  return (
    <SafeAreaView className="flex-1 bg-vallayf-950">
      <Image className="absolute" source={require("@/assets/images/light.png")} />
      <Slot />
    </SafeAreaView>
  );
}

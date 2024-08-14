import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "@/components/Icon";

export default function Navbar() {
  return (
    <View className="flex flex-row justify-between items-center px-4 pt-4 w-full">
      <View className="flex flex-row justify-center items-center space-x-1 bg-vallayf-600  border border-vallayf-400 px-3 py-1 rounded-full">
        <Image source={require("@/assets/images/vp.png")} className="w-4 h-4" />
        <Text
          className="text-white text-[12px]"
          style={{ fontFamily: "Montserrat_600SemiBold" }}
        >
          1775
        </Text>
      </View>
      <View className="flex flex-row justify-center items-center self-center absolute w-full pl-8 pt-4">
        <Image
          source={require("@/assets/images/LOGO_WHITE.png")}
          className="w-9 h-9 self-center"
        />
      </View>
      <TouchableOpacity className="flex flex-row justify-center items-center bg-vallayf-riot/50 p-3 rounded-full">
        <Icon name="LogOut" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

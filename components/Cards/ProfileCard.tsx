import { Image, Text, View } from "react-native";
import React from "react";

export default function ProfileCard({
  image,
  name,
}: {
  image: string;
  name: string;
}) {
  return (
    <View className="flex flex-row justify-center items-center space-x-3">
      <Image
        className="w-12 h-12 rounded-full"
        src="https://github.com/gweepcreative.png"
      />
      <Text
        className="text-white text-base"
        style={{ fontFamily: "Montserrat_600SemiBold" }}
      >
        {name.split("#")[0]}
      </Text>
      <Text
        className="bg-vallayf-950  p-2 rounded-xl text-[10px] text-vallayf-500"
        style={{ fontFamily: "Montserrat_600SemiBold" }}
      >
        #{name.split("#")[1]}
      </Text>
    </View>
  );
}

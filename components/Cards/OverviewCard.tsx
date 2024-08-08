import { View, Image } from "react-native";
import React from "react";
import Text from "@/components/Text";

export default function OverviewCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <View className="flex-1 bg-vallayf-950 rounded-xl p-3 border-vallayf-purple/50 border-2 overflow-hidden">
      <Image
        source={require("@/assets/images/light.png")}
        className="absolute overflow-hidden"
      />
      <View className="flex flex-col justify-center items-start">
        <Text font="SemiBold" classNames="text-vallayf-500 ">
          {title}
        </Text>
        <Text font="Bold" classNames="text-xl sm:text-2xl">
          {value}
        </Text>
      </View>
    </View>
  );
}

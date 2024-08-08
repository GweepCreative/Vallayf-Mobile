import { Image, ImageBackground, View } from "react-native";
import React from "react";
import Text from "@/components/Text";

export default function Weapon({
  displayImage,
  weaponName,
  weaponPrice,
  backgroundImage,
}: {
  displayImage: string;
  weaponName: string;
  weaponPrice: number;
  backgroundImage?: string;
}) {
  return backgroundImage ? (
    <ImageBackground
      src={backgroundImage}
      resizeMethod="resize"
      resizeMode="cover"
      style={{ overflow: "hidden" }}
      className="overflow-hidden mt-3 bg-vallayf-purple/25 rounded-2xl p-3 space-y-2 border-2 border-vallayf-purple/50"
    >
      <Image
        className="w-full h-14 rounded-lg "
        resizeMethod="resize"
        resizeMode="contain"
        src={displayImage}
      />
      <View>
        <Text font="Bold" classNames="text-base">
          {weaponName}
        </Text>
        <View className="flex flex-row items-center ">
          <Image
            source={require("@/assets/images/vp.png")}
            className="w-4 h-4 mr-1"
          />
          <Text font="SemiBold">{weaponPrice}</Text>
        </View>
      </View>
    </ImageBackground>
  ) : (
    <View className="mt-3 bg-vallayf-purple/25 rounded-2xl p-4 space-y-4 border-2 border-vallayf-purple/50">
      <Image
        className="w-full h-14 rounded-lg "
        resizeMethod="resize"
        resizeMode="contain"
        src={displayImage}
      />
      <View>
        <Text font="Bold" classNames="text-lg">
          {weaponName}
        </Text>
        <View className="flex flex-row items-center ">
          <Image
            source={require("@/assets/images/vp.png")}
            className="w-4 h-4 mr-1"
          />
          <Text font="SemiBold">{weaponPrice}</Text>
        </View>
      </View>
    </View>
  );
}

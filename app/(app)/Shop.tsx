import { FlatList, Image, View } from "react-native";
import React, { useEffect, useState } from "react";
import Text from "@/components/Text";
import Weapon from "@/components/Cards/(Shop)/Weapon";
import Animated from "react-native-reanimated";
import { calculateTimeRemaining } from "@/lib/utils";
const weapons = [
  {
    displayImage:
      "https://media.valorant-api.com/weaponskins/522a264e-4ca7-adb0-6cf1-28b2ef938727/displayicon.png",
    weaponName: "Prelude to Chaos Vandal",
    weaponPrice: 1775,
    backgroundImage:
      "https://media.valorant-api.com/weaponskins/522a264e-4ca7-adb0-6cf1-28b2ef938727/wallpaper.png",
  },
  {
    displayImage:
      "https://media.valorant-api.com/weaponskins/b9ee2457-481c-6776-3f5b-0ca8e8f90c89/displayicon.png",
    weaponName: "Prime Vandal",
    weaponPrice: 1775,
  },
  {
    displayImage:
      "https://media.valorant-api.com/weaponskins/74789f33-4632-8052-96d7-258538721a32/displayicon.png",
    weaponName: "Glitchpop Vandal",
    weaponPrice: 1775,
  },
  {
    displayImage:
      "https://media.valorant-api.com/weaponskins/7156c2ee-41fc-f8f4-d457-ebb287965c08/displayicon.png",
    weaponName: "Oni Vandal",
    weaponPrice: 1775,
    backgroundImage:
      "https://media.valorant-api.com/weaponskins/7156c2ee-41fc-f8f4-d457-ebb287965c08/wallpaper.png",
  },
];
export default function Shop() {
  const targetHour = 3;
  const [timeRemaining, setTimeRemaining] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining(calculateTimeRemaining(targetHour));
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeRemaining]);
  return (
    <View className="flex-1 mt-4">
      <View className="flex flex-row w-full justify-between">
        <Text font="Bold" classNames="text-3xl">
          Store
        </Text>
        <View className="flex flex-col justify-center items-end">
          <Text font="SemiBold" classNames="text-vallayf-500">
            Refresh after
          </Text>
          <Text font="SemiBold" classNames="text-vallayf-500">
            <Animated.Text>{timeRemaining}</Animated.Text>
          </Text>
        </View>
      </View>
      <View className="flex">
        <FlatList
          data={weapons}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <Weapon
              displayImage={item.displayImage}
              weaponName={item.weaponName}
              weaponPrice={item.weaponPrice}
              backgroundImage={item.backgroundImage}
            />
          )}
        />
      </View>
    </View>
  );
}

import { View } from "react-native";
import React from "react";
import RatingCard from "@/components/Cards/RatingCard";
import { Ranks } from "@/types/Ranks";
import ProfileCard from "@/components/Cards/ProfileCard";
import Text from "../Text";
export default function UserCard() {
  return (
    <View className="bg-vallayf-900 w-full rounded-3xl border-2 border-vallayf-purple/50 mt-3">
      {/* HEAD */}
      <View className="flex flex-row  items-center justify-between p-4">
        <ProfileCard image="" name="BBL LYLA#QUTI" />
        <View>
          <Text
            classNames=" rounded-xl text-[12px] text-vallayf-400  "
            font="Bold"
          >
            E9: A1
          </Text>
        </View>
      </View>
      {/* RATING */}
      <View className="bg-vallayf-950 rounded-3xl flex flex-row justify-evenly items-center py-3">
        <RatingCard
          rating="Current"
          episode="EPISODE 9: ACT 1"
          rankName={Ranks.Platinum3}
        />
        <RatingCard
          rating="Peak"
          episode="EPISODE 8: ACT 3"
          rankName={Ranks.Diamond1}
        />
      </View>
    </View>
  );
}

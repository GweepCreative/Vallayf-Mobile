import { GetRank, Ranks } from "@/types/Ranks";
import React, { useEffect } from "react";
import { Image, Text, View } from "react-native";
interface RatingCardProps {
  rating: "Current" | "Peak";
  episode: string;
  rankName: Ranks;
}

export default function RatingCard({
  rating,
  episode,
  rankName,
}: RatingCardProps) {
  const [rank, setRank] = React.useState({ tierName: "", largeIcon: "" });
  useEffect(() => {
    (async () => {
      const data = await GetRank(rankName);
      setRank(data);
    })();
  }, []);
  return (
    <View className="flex flex-col justify-center items-center space-y-2">
      <Text
        className="text-white text-[10px]"
        style={{
          fontFamily: "Montserrat_600SemiBold",
        }}
      >
        {rating} Rating
      </Text>
      <Image src={rank.largeIcon} className="w-10 h-10" />
      <View className="flex flex-col items-center justify-center">
        <Text
          className="text-white text-[10px]"
          style={{
            fontFamily: "Montserrat_600SemiBold",
          }}
        >
          {rank.tierName.charAt(0).toUpperCase() +
            rank.tierName.slice(1).toLowerCase()}
        </Text>
        <Text
          className="text-[8px] text-vallayf-500"
          style={{
            fontFamily: "Montserrat_600SemiBold",
          }}
        >
          {episode}
        </Text>
      </View>
    </View>
  );
}

import { View, Image } from "react-native";
import React from "react";
import Text from "@/components/Text";
import { cn } from "@/lib/utils";
import { KDA, MatchCardType, MVPBadge, ScoreBoard } from "./Cards";

export default function MatchCard({data}: MatchCardType) {
  return (
    <View className="flex flex-row justify-between items-center bg-vallayf-purple/25 p-3 rounded-2xl">
      <View className="flex flex-row">
        <Image src={data.agent} className="w-10 h-10 rounded-full" />
        <View className="flex flex-col ml-2">
          <Text classNames="text-[8px]" font="Regular">
            {data.mode} • {data.date}
          </Text>
          <Text classNames="text-base" font="Bold">
            {data.map}
          </Text>
        </View>
      </View>
      <Image src={data.rank} className="w-8 h-8" />

      <View className="flex flex-col">
        <ScoreBoard home={data.home} away={data.away} />
        <MVPBadge rank={data.matchRank} />
      </View>
      <KDA kills={data.kills} deaths={data.deaths} assists={data.assists} />
    </View>
  );
}

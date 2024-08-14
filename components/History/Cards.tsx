import { View, Image } from "react-native";
import React from "react";
import Text from "@/components/Text";
import { cn } from "@/lib/utils";

type MatchCardType = {
  data: {
    home: number;
    away: number;
    kills: number;
    deaths: number;
    assists: number;
    rank: string;
    map: string;
    agent: string;
    date: string;
    mode: string;
    matchRank: number;
  };
};

function KDA({
  kills,
  deaths,
  assists,
}: {
  kills: number;
  deaths: number;
  assists: number;
}) {
  return (
    <View className="items-end justify-center">
      <Text classNames="text-[8px]">K/D/A</Text>
      <Text font="Bold">
        {kills}/{deaths}/{assists}
      </Text>
    </View>
  );
}
function MVPBadge({ rank }: { rank?: number }) {
  return (
    <View
      className={cn(
        "w-full items-center justify-center rounded-full py-1 bg-vallayf-900 ",
        rank === 1 && "bg-[#6D6519]",
        rank === 2 && "bg-[#808080]",
        rank === 3 && "bg-[#1E1E1E]"
      )}
    >
      <Text font="SemiBold" classNames="text-[8px]">
        {rank === 1
          ? "MVP"
          : rank === 2
          ? "2nd"
          : rank === 3
          ? "3rd"
          : `${rank}th`}
      </Text>
    </View>
  );
}
function ScoreBoard({ home, away }: { home?: number; away?: number }) {
  return (
    <View className="flex flex-row items-center justify-center ">
      <Text font="Bold" classNames="text-vallayf-riot">
        {home}
      </Text>
      <Text font="Bold" classNames="text-white mx-1">
        :
      </Text>
      <Text font="Bold" classNames="text-green-500">
        {away}
      </Text>
    </View>
  );
}

export { KDA, MVPBadge, ScoreBoard, MatchCardType };

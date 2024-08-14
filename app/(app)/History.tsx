import { View, Image, FlatList, RefreshControl } from "react-native";
import React, { useEffect } from "react";
import Text from "@/components/Text";
import { cn } from "@/lib/utils";
import MatchCard from "@/components/History/MatchCard";
import { MatchCardType } from "@/components/History/Cards";

const data: MatchCardType[] = [
  {
    data: {
      home: 10,
      away: 13,
      rank: "https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiersv2/17.png",
      agent:
        "https://titles.trackercdn.com/valorant-api/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/displayicon.png",
      mode: "Competitive",
      date: "1d Ago",
      map: "Ascent",
      matchRank: 1,
      kills: 11,
      deaths: 18,
      assists: 6,
    },
  },
];
export default function History() {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  }, []);


  return (
    <View className="flex py-4 flex-1">
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        className="flex flex-1 w-full h-full "
        contentContainerStyle={{ gap: 12 }}
        showsVerticalScrollIndicator={false}
        data={new Array(10)
          .fill(data)
          .reduce((acc, curr) => acc.concat(curr), [])}
        renderItem={({ item }) => <MatchCard data={item.data} />}
      />
    </View>
  );
}

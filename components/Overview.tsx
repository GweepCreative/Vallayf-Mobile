import { FlatList, Image, View } from "react-native";
import React from "react";
import Text from "@/components/Text";
import OverviewCard from "@/components/Cards/OverviewCard";
export default function Overview() {
  return (
    <View className="flex flex-col space-y-3 items-center justify-center mt-4">
      <Text font="SemiBold">E9: A1 Competitive Overview</Text>
      <View className="flex flex-col w-full space-y-4">
        {/* ROW1 */}
        <View className="flex flex-row w-full space-x-2">
          <OverviewCard title="Damage/Round" value="126.2" />
          <View className="flex-[.05]" />
          <OverviewCard title="K/D" value="1.94" />
        </View>

        {/* ROW2 */}
        <View className="flex flex-row w-full space-x-2">
          <OverviewCard title="HS%" value="21.1%" />
          <View className="flex-[.05]" />
          <OverviewCard title="Win %" value="46.4%" />
        </View>

        {/* ROW3 */}
        <View className="flex flex-row w-full space-x-2">
          <OverviewCard title="Kills" value="1.309" />
          <View className="flex-[.05]" />
          <OverviewCard title="Deaths" value="1.390" />
        </View>
      </View>
    </View>
  );
}

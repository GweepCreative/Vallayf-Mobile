import { View } from "react-native";
import React from "react";
import UserCard from "@/components/Cards/(Main)/User";
import Overview from "@/components/Overview";

export default function Main() {
  return (
    <View className="flex-1">
      <UserCard />
      <Overview />
    </View>
  );
}

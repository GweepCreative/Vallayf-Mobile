import { FlatList, Image, View } from "react-native";
import React from "react";
import Navbar from "@/components/Navbar";
import UserCard from "@/components/Cards/User";
import Overview from "@/components/Overview";

export default function Main() {
  return (
    <View className="flex-1 px-8 py-2 ">
      <Navbar />
      <UserCard />
      <Overview />
    </View>
  );
}

import { FlatList, Image, View } from "react-native";
import React from "react";
import Navbar from "@/components/Navbar";
import UserCard from "@/components/Cards/(Main)/User";
import Overview from "@/components/Overview";
import { Link } from "expo-router";
import Text from "@/components/Text";

export default function Main() {
  return (
    <View className="flex-1 px-8 py-2 ">
      <Navbar />
      <UserCard />
      <Overview />
      <Link href={"/(app)/Shop" as any} className="bg-black rounded py-2 px-4 mt-8">
        <View>
          <Text>Go To Shop</Text>
        </View>
      </Link>
    </View>
  );
}

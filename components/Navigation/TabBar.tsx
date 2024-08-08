import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "../Icon";
import { Link, useNavigation, useRouter } from "expo-router";
import { cn } from "@/lib/utils";

export default function TabBar() {
  const pathName = useNavigation();
  var path = pathName.getState().routes[0].state || { index: 0 };

  return (
    <View className="w-full bg-black h-20 rounded-full flex flex-row justify-evenly items-center absolute bottom-5 self-center">
      <Link
        href={"/(app)" as any}
        className={cn(
          "p-2 items-center justify-center rounded-full w-12 h-12",
          path.index === 0 ? "bg-white" : "bg-black"
        )}
        asChild
      >
        <TouchableOpacity>
          <Icon name="House" color={path.index === 0 ? "#000" : "#fff"} />
        </TouchableOpacity>
      </Link>

      <Link
        href={"/(app)/Shop" as any}
        className={cn(
          "p-2 items-center justify-center rounded-full w-12 h-12",
          path.index === 1 ? "bg-white" : "bg-black"
        )}
        asChild
      >
        <TouchableOpacity>
          <Icon name="ShoppingBasket" color={path.index === 1 ? "#000" : "#fff"} />
        </TouchableOpacity>
      </Link>
      <Link
        href={"/(app)/History" as any}
        className={cn(
          "p-2 items-center justify-center rounded-full w-12 h-12",
          path.index === 2 ? "bg-white" : "bg-black"
        )}
        asChild
      >
        <TouchableOpacity>
          <Icon name="History" color={path.index === 2 ? "#000" : "#fff"} />
        </TouchableOpacity>
      </Link>
    </View>
  );
}

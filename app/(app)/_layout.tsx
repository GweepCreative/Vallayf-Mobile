import { Image } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "@/components/Navbar";
import TabBar from "@/components/Navigation/TabBar";
import { Tabs } from "expo-router";
import Icon from "@/components/Icon";

export default function _layout() {
  return (
    <SafeAreaView className="flex-1 bg-vallayf-950  ">
      <Image
        className="absolute"
        source={require("@/assets/images/light.png")}
      />
      <Navbar />
      {/* <Slot /> */}
      <Tabs
        backBehavior={"initialRoute"}
        sceneContainerStyle={{
          flex: 1,
          backgroundColor: "transparent",
          paddingHorizontal: 16,
        }}
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          tabBarShowLabel: false,
          
          tabBarStyle: {
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            width: "100%",
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 72,
            bottom: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <Icon size={28} name="House" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="Shop"
          options={{
            title: "Shop",
            tabBarIcon: ({ color }) => (
              <Icon size={28} name="ShoppingBasket" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="History"
          options={{
            title: "History",
            tabBarIcon: ({ color }) => (
              <Icon size={28} name="History" color={color} />
            ),
          }}
        />
      </Tabs>
      {/* <TabBar /> */}
    </SafeAreaView>
  );
}

import * as ReactNative from "react-native";
import React from "react";
import { cn } from "@/lib/utils";

export default function Text({
  children,
  font = "Regular",
  classNames,
}: {
  children: React.ReactNode;
  font?: "Regular" | "SemiBold" | "Bold";
  classNames?: string;
}) {
  return (
    <ReactNative.Text
      className={cn("text-white", classNames)}
      style={{
        fontFamily:
          font === "Bold"
            ? `Montserrat_700Bold`
            : font === "SemiBold"
            ? `Montserrat_600SemiBold`
            : `Montserrat_400Regular`,
      }}
    >
      {children}
    </ReactNative.Text>
  );
}

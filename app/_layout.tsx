import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import "react-native-reanimated";
import { PlanProvider } from "../context/PlanContext";

export default function RootLayout() {
  return (
    <PlanProvider>
      <StatusBar barStyle="dark-content" />
      <Stack
        initialRouteName="index"
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="budget" />
        <Stack.Screen name="diet" />
        <Stack.Screen name="goals" />
        <Stack.Screen name="plan" />
      </Stack>
    </PlanProvider>
  );
}

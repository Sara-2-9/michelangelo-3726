import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function OnboardingHeader({
  progress,
}: {
  progress: number;
}) {
  const router = useRouter();
  return (
    <View style={styles.row}>
      <TouchableOpacity
        onPress={() => router.back()}
        hitSlop={12}
        style={styles.back}
      >
        <Ionicons name="chevron-back" size={24} color="#111827" />
      </TouchableOpacity>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${Math.round(progress * 100)}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginBottom: 28,
  },
  back: {
    width: 32,
  },
  track: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E5E7EB",
    overflow: "hidden",
  },
  fill: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#22C55E",
  },
});

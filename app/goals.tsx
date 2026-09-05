import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingHeader from "../components/OnboardingHeader";
import PrimaryButton from "../components/PrimaryButton";
import { usePlan } from "../context/PlanContext";

const OPTIONS = [
  { id: "none", label: "None", emoji: "" },
  { id: "high_protein", label: "High protein", emoji: "🥩" },
  { id: "low_sugar", label: "Low sugar", emoji: "🍯" },
  { id: "low_fat", label: "Low fat", emoji: "🫑" },
  { id: "low_carbs", label: "Low carbs", emoji: "🍝" },
  { id: "low_salt", label: "Low salt", emoji: "🧂" },
];

export default function GoalsScreen() {
  const router = useRouter();
  const { goal, setGoal } = usePlan();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <OnboardingHeader progress={1} />

        <Text style={styles.title}>Any nutritional goals?</Text>

        <View style={styles.grid}>
          {OPTIONS.map((option) => {
            const selected = goal === option.id;
            return (
              <TouchableOpacity
                key={option.id}
                style={[styles.tile, selected && styles.tileSelected]}
                onPress={() => setGoal(option.id)}
                activeOpacity={0.8}
              >
                {option.emoji ? (
                  <Text style={styles.emoji}>{option.emoji}</Text>
                ) : null}
                <Text style={styles.tileLabel}>{option.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <PrimaryButton
          label="Continue"
          disabled={goal === null}
          onPress={() => router.push("/plan")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111827",
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 14,
    alignContent: "center",
  },
  tile: {
    width: "47%",
    flexGrow: 1,
    backgroundColor: "#F3F4F6",
    borderRadius: 20,
    paddingVertical: 28,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "transparent",
  },
  tileSelected: {
    borderColor: "#22C55E",
    backgroundColor: "#F0FDF4",
  },
  emoji: {
    fontSize: 30,
    marginBottom: 8,
  },
  tileLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },
});

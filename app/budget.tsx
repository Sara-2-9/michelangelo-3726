import Slider from "@react-native-community/slider";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OnboardingHeader from "../components/OnboardingHeader";
import PrimaryButton from "../components/PrimaryButton";
import { usePlan } from "../context/PlanContext";

export default function BudgetScreen() {
  const router = useRouter();
  const { budget, setBudget } = usePlan();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <OnboardingHeader progress={1 / 3} />

        <Text style={styles.title}>What{"\u2019"}s your budget?</Text>

        <View style={styles.center}>
          <Text style={styles.amount}>
            <Text style={styles.currency}>€</Text>
            {Math.round(budget)}
          </Text>
          <Text style={styles.perWeek}>per week</Text>

          <Slider
            style={styles.slider}
            minimumValue={20}
            maximumValue={200}
            step={1}
            value={budget}
            onValueChange={setBudget}
            minimumTrackTintColor="#E5E7EB"
            maximumTrackTintColor="#E5E7EB"
            thumbTintColor="#FFFFFF"
          />
        </View>

        <PrimaryButton label="Continue" onPress={() => router.push("/diet")} />
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
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  amount: {
    fontSize: 72,
    fontWeight: "800",
    color: "#111827",
  },
  currency: {
    color: "#22C55E",
  },
  perWeek: {
    fontSize: 17,
    fontWeight: "500",
    color: "#9CA3AF",
    marginTop: 4,
  },
  slider: {
    width: "100%",
    height: 48,
    marginTop: 48,
  },
});

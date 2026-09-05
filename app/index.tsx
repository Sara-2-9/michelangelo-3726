import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../components/PrimaryButton";

const IMAGES = {
  bag: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80&auto=format&fit=crop",
  apple: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200&q=80&auto=format&fit=crop",
  avocado: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=200&q=80&auto=format&fit=crop",
  carrot: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=200&q=80&auto=format&fit=crop",
  broccoli: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=200&q=80&auto=format&fit=crop",
  greens: "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=200&q=80&auto=format&fit=crop",
  honey: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=200&q=80&auto=format&fit=crop",
};

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>MealPrep</Text>

        <View style={styles.collage}>
          <Image source={{ uri: IMAGES.apple }} style={[styles.bubble, styles.bubbleApple]} contentFit="cover" />
          <Image source={{ uri: IMAGES.honey }} style={[styles.bubble, styles.bubbleHoney]} contentFit="cover" />
          <Image source={{ uri: IMAGES.carrot }} style={[styles.bubble, styles.bubbleCarrot]} contentFit="cover" />
          <Image source={{ uri: IMAGES.broccoli }} style={[styles.bubble, styles.bubbleBroccoli]} contentFit="cover" />
          <Image source={{ uri: IMAGES.avocado }} style={[styles.bubble, styles.bubbleAvocado]} contentFit="cover" />
          <Image source={{ uri: IMAGES.greens }} style={[styles.bubble, styles.bubbleGreens]} contentFit="cover" />
          <Image source={{ uri: IMAGES.bag }} style={styles.bag} contentFit="cover" />
        </View>

        <PrimaryButton
          label="Create your meal plan"
          onPress={() => router.push("/budget")}
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
    fontSize: 34,
    fontWeight: "800",
    color: "#111827",
    marginTop: 16,
  },
  collage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bag: {
    width: 190,
    height: 190,
    borderRadius: 28,
  },
  bubble: {
    position: "absolute",
    borderRadius: 999,
    backgroundColor: "#F3F4F6",
  },
  bubbleApple: {
    width: 64,
    height: 64,
    top: "8%",
    left: "16%",
  },
  bubbleHoney: {
    width: 52,
    height: 52,
    top: "6%",
    right: "20%",
  },
  bubbleCarrot: {
    width: 56,
    height: 56,
    top: "34%",
    right: "6%",
  },
  bubbleBroccoli: {
    width: 48,
    height: 48,
    top: "40%",
    left: "4%",
  },
  bubbleAvocado: {
    width: 58,
    height: 58,
    bottom: "18%",
    right: "14%",
  },
  bubbleGreens: {
    width: 50,
    height: 50,
    bottom: "12%",
    left: "18%",
  },
});

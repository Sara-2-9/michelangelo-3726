import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePlan } from "../context/PlanContext";
import { DAYS, DAY_NAMES, RECIPES } from "../utils/recipes";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const CARD_WIDTH = SCREEN_WIDTH - 56;
const CARD_GAP = 12;
const SNAP_INTERVAL = CARD_WIDTH + CARD_GAP;
const SIDE_INSET = (SCREEN_WIDTH - CARD_WIDTH) / 2 - CARD_GAP;

export default function PlanScreen() {
  const { budget } = usePlan();
  const [dayIndex, setDayIndex] = useState(0);
  const carouselRef = useRef<ScrollView>(null);

  const estCost = Math.round(budget);

  const goToDay = (index: number) => {
    setDayIndex(index);
    carouselRef.current?.scrollTo({ x: index * SNAP_INTERVAL, animated: true });
  };

  const handleMomentumEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / SNAP_INTERVAL);
    if (index >= 0 && index < DAYS.length && index !== dayIndex) {
      setDayIndex(index);
    }
  };

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.headerSafe} edges={["top"]}>
        <Text style={styles.title}>Bon appetit!</Text>

        <View style={styles.costCard}>
          <Text style={styles.costLabel}>Est. cost</Text>
          <Text style={styles.costValue}>
            €{estCost} <Text style={styles.costSuffix}>/ week</Text>
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.daysRow}
        >
          {DAYS.map((day, index) => {
            const selected = index === dayIndex;
            return (
              <TouchableOpacity
                key={day}
                style={[styles.dayPill, selected && styles.dayPillSelected]}
                onPress={() => goToDay(index)}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    styles.dayPillText,
                    selected && styles.dayPillTextSelected,
                  ]}
                >
                  {day}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>

      <ScrollView
        ref={carouselRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SNAP_INTERVAL}
        decelerationRate="fast"
        disableIntervalMomentum
        onMomentumScrollEnd={handleMomentumEnd}
        contentContainerStyle={styles.carouselContent}
        style={styles.carousel}
      >
        {RECIPES.map((recipe, index) => (
          <View
            key={DAY_NAMES[index]}
            style={[
              styles.card,
              index === 0 && styles.cardFirst,
              index === RECIPES.length - 1 && styles.cardLast,
            ]}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.cardContent}
              nestedScrollEnabled
            >
              <Text style={styles.dayName}>{DAY_NAMES[index]}</Text>

              <Text style={styles.recipeName}>{recipe.name}</Text>
              <View style={styles.metaRow}>
                <View style={styles.metaItem}>
                  <Ionicons name="time-outline" size={14} color="#9CA3AF" />
                  <Text style={styles.metaText}>{recipe.minutes} min</Text>
                </View>
                <View style={styles.metaItem}>
                  <Ionicons name="people-outline" size={14} color="#9CA3AF" />
                  <Text style={styles.metaText}>
                    {recipe.servings} servings
                  </Text>
                </View>
                <View style={styles.metaItem}>
                  <Ionicons name="wallet-outline" size={14} color="#9CA3AF" />
                  <Text style={styles.metaText}>
                    €{recipe.costPerServing.toFixed(2)} / serving
                  </Text>
                </View>
              </View>

              <Text style={styles.sectionTitle}>Ingredients</Text>
              {recipe.ingredients.map((ingredient) => (
                <View key={ingredient} style={styles.listRow}>
                  <View style={styles.bullet} />
                  <Text style={styles.listText}>{ingredient}</Text>
                </View>
              ))}

              <Text style={styles.sectionTitle}>Recipe</Text>
              {recipe.steps.map((step, stepIndex) => (
                <View key={step} style={styles.stepRow}>
                  <View style={styles.stepBadge}>
                    <Text style={styles.stepNumber}>{stepIndex + 1}</Text>
                  </View>
                  <Text style={styles.listText}>{step}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#22C55E",
  },
  headerSafe: {
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 20,
  },
  costCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 16,
  },
  costLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#9CA3AF",
  },
  costValue: {
    fontSize: 20,
    fontWeight: "800",
    color: "#111827",
  },
  costSuffix: {
    fontSize: 14,
    fontWeight: "600",
    color: "#9CA3AF",
  },
  daysRow: {
    gap: 8,
  },
  dayPill: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  dayPillSelected: {
    backgroundColor: "#111827",
  },
  dayPillText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#111827",
  },
  dayPillTextSelected: {
    color: "#FFFFFF",
  },
  carousel: {
    flex: 1,
  },
  carouselContent: {
    paddingLeft: SIDE_INSET,
    paddingRight: SIDE_INSET,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    marginRight: CARD_GAP,
    overflow: "hidden",
  },
  cardFirst: {
    borderRadius: 28,
  },
  cardLast: {
    borderRadius: 28,
    marginRight: 0,
  },
  cardContent: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 48,
  },
  dayName: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 16,
  },
  recipeName: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
  },
  metaRow: {
    flexDirection: "row",
    gap: 16,
    marginTop: 6,
    marginBottom: 24,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: "#9CA3AF",
    fontWeight: "500",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 12,
    marginTop: 8,
  },
  listRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#22C55E",
  },
  listText: {
    flex: 1,
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 20,
  },
  stepRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 14,
  },
  stepBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#F0FDF4",
    alignItems: "center",
    justifyContent: "center",
  },
  stepNumber: {
    fontSize: 12,
    fontWeight: "700",
    color: "#22C55E",
  },
});

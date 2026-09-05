import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function PrimaryButton({
  label,
  onPress,
  disabled,
}: {
  label: string;
  onPress: () => void;
  disabled?: boolean;
}) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.85}
    >
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#22C55E",
    borderRadius: 32,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  disabled: {
    backgroundColor: "#E5E7EB",
  },
  label: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },
});

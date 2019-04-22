import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { blue, white, darkBlue } from "../utils/colors";

export default function TextButton({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity style={styles.submitButton} onPress={onPress}>
      <Text style={styles.submitText}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: blue,
    marginTop: 25,
    width: 125,
    height: 40,
    borderRadius: 5,
    justifyContent: "center"
  },
  submitText: {
    textAlign: "center",
    color: white,
    textTransform: "uppercase",
    fontWeight: "bold"
  }
});

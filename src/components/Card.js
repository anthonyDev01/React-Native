import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export function Card(props) {
  return (
    <TouchableOpacity style={styles.buttonSkills} activeOpacity={0.7}>
      <Text style={styles.textSkills}>{props.skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkills: {
    backgroundColor: "#1f1e25",
    borderRadius: 20,
    padding: 15,
    marginBottom: 25,
    alignItems: "center",
  },

  textSkills: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
});

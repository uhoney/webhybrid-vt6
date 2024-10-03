import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Joke from "./components/Joke";
import Type from "./components/Type";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Jokes demo (vt6)</Text>
      <Text style={styles.text}>
        Pick a category or just get a general joke
      </Text>
      <Type />
      <Joke />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 26,
    paddingBottom: 14,
  },
  text: {
    fontSize: 12,
    padding: 8,
  },
});

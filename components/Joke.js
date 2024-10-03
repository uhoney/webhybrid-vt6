import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

export default function Joke() {
  return (
    <View style={styles.container}>
      <Text>Joke</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
    padding: 8,
  },
});

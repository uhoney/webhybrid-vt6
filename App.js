import { StyleSheet, Text, View, Button } from "react-native";
import Joke from "./components/Joke";
import Type from "./components/Type";
import React, { useState } from "react";

export default function App() {
  const [selectedType, setSelectedType] = useState("");
  const [fetchJoke, setFetchJoke] = useState(false);

  const handleFetchJoke = () => {
    setFetchJoke(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Jokes demo (vt6)</Text>
      <Text style={styles.headerSmall}>
        Pick a category or just get a general joke
      </Text>
      <View style={styles.typeAndButton}>
        <Type selectedType={selectedType} setSelectedType={setSelectedType} />
        <Button title="fetch joke" onPress={handleFetchJoke} />
      </View>
      <Joke
        selectedType={selectedType}
        fetchJoke={fetchJoke}
        setFetchJoke={setFetchJoke}
      />
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
  headerSmall: {
    fontSize: 12,
    paddingBottom: 16,
  },
  typeAndButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

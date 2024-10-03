import { View, StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import useFetchTypes from "../hooks/useFetchTypes";

export default function Type() {
  const [selectedType, setSelectedType] = useState("");
  const { jokeTypes, loading, error } = useFetchTypes();

  useEffect(() => {
    if (jokeTypes.length > 0) {
      setSelectedType(jokeTypes[0]);
      console.log("napin default: " + selectedType);
    }
  }, [jokeTypes]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={styles.container}>
      <Picker
        style={styles.picker}
        selectedValue={selectedType}
        onValueChange={(itemValue) => setSelectedType(itemValue)}
        mode="dialog"
      >
        {jokeTypes.map((type, index) => (
          <Picker.Item key={index} label={type} value={type} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    height: 50,
    width: 250,
    // backgroundColor: "cyan",
  },
});

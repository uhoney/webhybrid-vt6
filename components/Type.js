import { StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import useFetch from "../hooks/useFetch";

export default function Type({ selectedType, setSelectedType }) {
  const { data, loading, error } = useFetch();

  useEffect(() => {
    if (data.length > 0) {
      setSelectedType(data[0]);
    }
  }, [data]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <Picker
      style={styles.picker}
      selectedValue={selectedType}
      onValueChange={(itemValue) => setSelectedType(itemValue)}
      mode="dialog"
    >
      {data.map((type, index) => (
        <Picker.Item key={index} label={type} value={type} />
      ))}
    </Picker>
  );
}

const styles = StyleSheet.create({
  // Picker ei suostu toimimaan ilman tyylejä ??!!
  // Ja tässä ei halua toimia mikään relative es. width: '80%'
  picker: {
    height: 50,
    width: 250,
    // backgroundColor: "cyan" // DEBUG
  },
});

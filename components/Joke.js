import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import useFetch from "../hooks/useFetch";

export default function Joke({ selectedType, fetchJoke, setFetchJoke }) {
  const { data, loading, error } = useFetch(
    selectedType,
    fetchJoke,
    setFetchJoke
  );

  if (loading) {
    return <></>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <>
      {data.length > 0 && (
        <View>
          <Text style={styles.text}>{data[0].setup}</Text>
          <Text style={styles.text}>{data[0].punchline}</Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 14,
  },
  text: {
    paddingTop: 24,
    fontSize: 14,
    // backgroundColor: "blue",
  },
});

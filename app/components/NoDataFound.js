// NoDataFound.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NoDataFound = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Data Found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  text: {
    fontSize: 18,
    color: "#666",
  },
});

export default NoDataFound;

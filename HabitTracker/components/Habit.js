import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Day from "./Day";

const styles = StyleSheet.create({
  habitContainer: {
    padding: 10
  },
  viewContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

const Habit = ({ habitName, habitLength }) => {
  const days = Array(habitLength).fill(false);

  return (
    <View style={styles.habitContainer}>
      <View>
        <Text>{habitName}</Text>
      </View>
      <View style={styles.viewContainer}>
        {days.map((day, index) => (
          <Day key={index}>{index}</Day>
        ))}
      </View>
    </View>
  );
};

export default Habit;

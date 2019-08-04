import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, AsyncStorage, Button } from "react-native";
import Day from "./Day";

const styles = StyleSheet.create({
  habitContainer: {
    padding: 10
  },
  habitHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 5,
    alignItems: "baseline"
  },
  dayGrid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

export const HABIT_KEY_PREFIX = "habit:";
export const getHabitKey = habitTitle => {
  const titleWithUnderscores = habitTitle.replace(/\s+/g, "_"); // Convert spaces to underscores
  return `${HABIT_KEY_PREFIX}${titleWithUnderscores}`;
};

const Habit = ({ habit, onDelete }) => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    console.log(`habit from props: ${JSON.stringify(habit)}`);
    setDays(habit.collection);
  }, [habit.title]);

  const handleDayToggle = index => {
    console.log(`handleToggleDay: ${index}`);
    console.log(`days: ${days}`);
    const newDays = [...days];
    newDays[index] = !newDays[index];
    setDays(newDays);
    storeDays(newDays);
  };

  const handleDelete = () => onDelete(habit.title);

  const storeDays = async days => {
    try {
      const habitObject = { title: habit.title, collection: days };
      console.log(`Storing: ${habitObject}`);
      await AsyncStorage.setItem(
        getHabitKey(habit.title),
        JSON.stringify(habitObject)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.habitContainer}>
      <View style={styles.habitHeader}>
        <Text>{habit.title}</Text>
        <Button title="Delete" onPress={handleDelete} />
      </View>
      <View style={styles.dayGrid}>
        {days.map((day, index) => (
          <Day
            key={index}
            state={day}
            index={index}
            onDayToggle={handleDayToggle}
          >
            {index + 1}
          </Day>
        ))}
      </View>
    </View>
  );
};

export default Habit;

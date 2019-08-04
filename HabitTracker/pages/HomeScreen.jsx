import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  AsyncStorage,
  StyleSheet,
  ScrollView
} from "react-native";
import Habit, { HABIT_KEY_PREFIX, getHabitKey } from "../components/Habit";
import AddHabitModal from "../components/AddHabitModal";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  habitsContainer: {
    flex: 1,
    flexDirection: "column"
  }
});

const HomeScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [habits, setHabits] = useState([]);

  const getAllHabits = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      console.log(`all keys: ${keys}`);
      const habitKeys = keys.filter(key => key.includes(HABIT_KEY_PREFIX));
      const allHabits = await AsyncStorage.multiGet(habitKeys);

      return allHabits.map(x => {
        return JSON.parse(x[1]);
        // return {
        //   title,
        //   collection
        // };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHabit = async habitTitle => {
    const habitKey = getHabitKey(habitTitle);
    await AsyncStorage.removeItem(habitKey);

    const newHabits = habits.filter(habit => habit.title !== habitTitle);
    setHabits(newHabits);
  };

  const deleteAll = async () => {
    const allKeys = await AsyncStorage.getAllKeys();
    // const test = allKeys.filter(x => x.includes("habit:"));
    await AsyncStorage.multiRemove(allKeys);
    setHabits([]);
  };

  useEffect(() => {
    console.log(`current state: ${habits.length}`);
    console.log("Fetching all habits!!");
    const fetchHabits = async () => {
      const habits = await getAllHabits();
      console.log(JSON.stringify(habits));
      setHabits(habits);
    };

    fetchHabits();
  }, []);

  const handleSubmit = (title, number) => storeHabit(title, number);

  const storeHabit = async (title, number) => {
    console.log(`Storing habit with title: ${title}`);
    try {
      const habitKey = getHabitKey(title);
      const habitObject = {
        title,
        collection: Array(number).fill(false)
      };
      await AsyncStorage.setItem(habitKey, JSON.stringify(habitObject));
      setHabits([...habits, habitObject]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Add habit" onPress={() => setShowModal(true)} />
      <ScrollView style={styles.container}>
        <View style={styles.habitsContainer}>
          {habits.map((habit, index) => (
            <Habit key={index} habit={habit} onDelete={deleteHabit} />
          ))}
        </View>
      </ScrollView>
      <AddHabitModal
        visible={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
      />
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: "My habits"
};

export default HomeScreen;

import React from "react";
import Habit from "../components/Habit";

const HomeScreen = () => <Habit habitName="Meditate" habitLength={49} />;

HomeScreen.navigationOptions = {
  title: "My habits"
};

export default HomeScreen;

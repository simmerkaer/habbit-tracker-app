import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  square: {
    height: 50,
    margin: 0,
    width: "14.28%",
    borderColor: "white",
    borderWidth: 1
  },
  touchable: {
    height: 50,
    flexDirection: "row"
  },
  squareOn: {
    backgroundColor: "green"
  },
  squareOff: {
    backgroundColor: "red"
  }
});

const Day = ({ children, index, state, onDayToggle }) => {
  const handlePress = () => onDayToggle(index);

  return (
    <View style={[styles.square, state ? styles.squareOn : styles.squareOff]}>
      <TouchableWithoutFeedback style={styles.touchable} onPress={handlePress}>
        <Text>{children}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Day;

import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  square: {
    flex: 1,
    height: 50,
    margin: 1,
    flexBasis: "13.5%"
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

const Day = ({ children }) => {
  const [status, setStatus] = useState(false);

  const handlePress = () => setStatus(!status);

  return (
    <View style={[styles.square, status ? styles.squareOn : styles.squareOff]}>
      <TouchableWithoutFeedback style={styles.touchable} onPress={handlePress}>
        <Text>{children}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Day;

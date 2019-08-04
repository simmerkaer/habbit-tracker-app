import React, { useState } from "react";
import { Modal, Button, View, TextInput, AsyncStorage } from "react-native";

const AddHabitModal = ({ visible, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [amountOfDays, setAmountOfDays] = useState(1);

  const handleSubmit = async () => {
    onSubmit(title, amountOfDays);
    onClose();

    setTitle("");
    setAmountOfDays(1);
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={{ marginTop: 22 }}>
        <View>
          <TextInput
            onChangeText={text => setTitle(text)}
            value={title}
            placeholder="Title"
          />

          <TextInput
            keyboardType="numeric"
            onChangeText={number => setAmountOfDays(+number)}
            value={amountOfDays.toString()}
          />
          <Button title="Add" onPress={handleSubmit} />
        </View>
      </View>
    </Modal>
  );
};

export default AddHabitModal;

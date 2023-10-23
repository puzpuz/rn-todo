import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import styles from "./styles/addButtonStyles";

const AddButton = ({ onAddTodo = () => {}, updateItem = undefined }) => {
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if (!updateItem) setIsUpdate(false);
    else {
      setIsUpdate(true);
    }
  }, [updateItem]);

  return (
    <TouchableOpacity onPress={onAddTodo}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>{isUpdate ? "UPDATE" : "ADD"}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AddButton;

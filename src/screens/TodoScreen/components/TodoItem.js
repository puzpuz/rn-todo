import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import styles from "./styles/todoItemStyles";

const TodoItem = ({
  item = undefined,
  onRemoveTodo = () => {},
  onSetUpdateItem = () => {},
}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onSetUpdateItem(item)}>
      <View style={styles.todoItemContainer}>
        <Text style={styles.text}>{item?.value}</Text>
        <TouchableOpacity>
          <Text style={styles.removeButton} onPress={() => onRemoveTodo(item)}>
            Remove
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default TodoItem;

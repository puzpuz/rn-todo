import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from "react-native";
import uuid from "react-native-uuid";
import { AddButton } from "./components";
import TodoItem from "./components/TodoItem";
import styles from "./styles/todoScreenStyles";

const INITIAL_TODO = [
  {
    id: uuid.v4(),
    value: "Todo 1",
  },
  {
    id: uuid.v4(),
    value: "Todo 2",
  },
];

const TodoScreen = ({ navigation }) => {
  const [todoList, setTodoList] = useState();
  const [addInput, setAddInput] = useState("");
  const [updateItem, setUpdateItem] = useState();

  //Reseting text input after submit
  const resetInput = () => {
    setAddInput("");
  };

  //handle add and update todolist state array
  const onAddTodo = () => {
    if (addInput === "") return;

    //if updateItem is empty then add new item at the bottom of the array
    if (!updateItem) {
      setTodoList([
        ...todoList,
        {
          id: uuid.v4(),
          value: addInput,
        },
      ]);
      resetInput();
      //if updateItem not empty, find the updated item index, and replace with new value
    } else {
      const index = todoList.findIndex((todo) => todo.id === updateItem.id);
      console.debug(index, updateItem);
      if (index && index >= 0) {
        setTodoList([
          ...todoList.slice(0, index),
          { ...updateItem, value: addInput },
          ...todoList.slice(index + 1),
        ]);
        resetInput();
        setUpdateItem(undefined);
      }
    }
  };

  //handle remove an item from todo list state array
  const onRemoveTodo = (item) => {
    const index = todoList.findIndex((todo) => todo.id === item.id);
    if (index && index >= 0) {
      setTodoList([...todoList.slice(0, index), ...todoList.slice(index + 1)]);
    }
  };

  //Logic to asssign update item
  const onSetUpdateItem = (item) => {
    setUpdateItem(item);
    setAddInput(item.value);
  };

  const renderTodoItem = ({ item, index }) => (
    <TodoItem
      item={item}
      onRemoveTodo={onRemoveTodo}
      onSetUpdateItem={onSetUpdateItem}
    />
  );

  const todoKeyExtractor = useCallback((item, index) => `todo${index}`, []);

  useEffect(() => {
    setTodoList(INITIAL_TODO);
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.todoContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.title}>Todo:</Text>
      <FlatList
        style={styles.flatListContainer}
        data={todoList}
        renderItem={renderTodoItem}
        keyExtractor={todoKeyExtractor}
      />
      <View style={styles.footerContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new todos"
          onChangeText={(value) => setAddInput(value)}
          value={addInput}
        />
        <AddButton onAddTodo={onAddTodo} updateItem={updateItem} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default TodoScreen;

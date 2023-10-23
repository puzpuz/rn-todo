import { StyleSheet } from "react-native";

const todoItemStyles = StyleSheet.create({
  todoItemContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: "blue",
    borderRadius: 40,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
  removeButton: {
    color: "#a0a0a0",
    fontSize: 16,
  },
});
export default todoItemStyles;

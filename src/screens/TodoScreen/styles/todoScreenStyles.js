import { StyleSheet } from "react-native";

const todoScreenStyles = StyleSheet.create({
  todoContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flexStart",
    justifyContent: "flexStart",
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 32,
    color: "blue",
    marginVertical: 32,
  },
  input: {
    fontSize: 18,
    flex: 1,
  },
  flatListContainer: {
    width: "100%",
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    backgroundColor: "#fff",
    paddingVertical: 16,
    width: "100%",
    borderRadius: 24,
  },
});
export default todoScreenStyles;

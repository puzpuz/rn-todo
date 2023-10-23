import { StyleSheet } from "react-native";
const loginScreenStyles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    fontSize: 16,
    color: "black",
    padding: 8,
  },
  buttonAuth: {
    backgroundColor: "blue",
    borderRadius: 24,
    padding: 24,
    width: "100%",
  },
  textAuth: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
export default loginScreenStyles;

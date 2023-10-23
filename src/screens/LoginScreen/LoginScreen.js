import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../context/AuthContext";
import styles from "./styles/loginScreenStyles";

const LoginScreen = ({ navigation }) => {
  //Authentication logic from AuthContext
  const { onHandleAuthenticate } = useAuth();
  return (
    <View style={styles.loginContainer}>
      <TouchableOpacity onPress={onHandleAuthenticate}>
        <View style={styles.buttonAuth}>
          <Text style={styles.textAuth}>Authenticate</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

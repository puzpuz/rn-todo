import React from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthContextProvider } from "./src/context/AuthContext";
import RootNavigation from "./src/navigations/index";
const App = () => {
  return (
    <SafeAreaProvider>
      <AuthContextProvider>
        <RootNavigation />
      </AuthContextProvider>
    </SafeAreaProvider>
  );
};
export default App;

import * as LocalAuth from "expo-local-authentication";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  isAuth: false,
  onHandleAuthenticate: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);

  //Checking device biometric support
  const checkBiometricSupport = async () => {
    const supportBiometric = await LocalAuth.hasHardwareAsync();
    setIsBiometricSupported(supportBiometric);
  };

  //Handle authentication logic
  const onHandleAuthenticate = async () => {
    try {
      const auth = await LocalAuth.authenticateAsync({
        promptMessage: "Authenticate with touch ID",
        fallbackLabel: "Enter password",
      });
      if (auth) {
        setIsAuth(auth.success);
        console.log(auth);
      }
    } catch (error) {
      console.log("error auth", error);
    }
  };

  useEffect(() => {
    checkBiometricSupport();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, onHandleAuthenticate }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const AuthValue = useContext(AuthContext);
  return AuthValue;
};

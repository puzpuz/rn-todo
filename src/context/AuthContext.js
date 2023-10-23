import * as LocalAuth from "expo-local-authentication";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Linking, Platform } from "react-native";

const AuthContext = createContext({
  isAuth: false,
  onHandleAuthenticate: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  //Checking device biometric support
  const checkBiometricSupport = async () => {
    const supportBiometric = await LocalAuth.hasHardwareAsync();
    setIsBiometricSupported(supportBiometric);
  };

  const checkEnroledSecurity = async () => {
    const _isEnrolled = await LocalAuth.isEnrolledAsync();
    setIsEnrolled(_isEnrolled);
  };

  const checkSupportedAuth = async () => {
    const supportedAuth = await LocalAuth.supportedAuthenticationTypesAsync();
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
        if (auth.success === false) {
          if (auth.error === "not_enrolled") {
            if (Platform.OS === "ios") {
              Linking.openURL("App-Prefs:root=TOUCHID_PASSCODE");
            } else {
              Linking.sendIntent("android.settings.SECURITY_SETTINGS");
            }
          }
        }
      }
    } catch (error) {
      console.log("error auth", error);
    }
  };

  useEffect(() => {
    checkBiometricSupport();
    checkEnroledSecurity();
    checkSupportedAuth();
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

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useAuth } from "../context/AuthContext";
import { LoginScreen, TodoScreen } from "../screens";
import navigationEnum from "./enumerations/navigationEnum";

const RootNavigation = () => {
  const RootStack = createStackNavigator();
  const { isAuth } = useAuth();
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {/* Protected routes based on isAuth status from AuthContext */}
        {isAuth === false ? (
          <RootStack.Screen
            name={navigationEnum.LoginScreen}
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <RootStack.Screen
            name={navigationEnum.TodoScreen}
            component={TodoScreen}
            options={{ headerShown: false }}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

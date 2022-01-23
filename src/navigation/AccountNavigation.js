import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../views/Account";

const Stack = createStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cuenta"
        component={AccountScreen}
        options={{ title: "Mi cuenta" }}
      />
    </Stack.Navigator>
  );
}

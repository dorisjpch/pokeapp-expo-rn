import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavoriteScreen from "../views/Favorite";
import PokemonScreen from "../views/Pokemon";

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favoritos"
        component={FavoriteScreen}
        options={{ title: "Favoritos" }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

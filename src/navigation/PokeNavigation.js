import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import pokeScreen from "../views/PokeApp";
import PokemonScreen from "../views/Pokemon";

const Stack = createStackNavigator();

export default function pokeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Lista de Pokemones"
        component={pokeScreen}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="Pokemons"
        component={PokemonScreen}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}

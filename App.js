import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TodosScreen from "./screens/TodosScreen";
import StorybookUIRoot from './storybook'

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Todos" component={TodosScreen} />
        <Tab.Screen name="Pinned" component={TodosScreen} />
        <Tab.Screen name="Done" component={TodosScreen} />
        {
          __DEV__ &&
            <Tab.Screen name="Storybook" component={StorybookUIRoot} />
        }
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

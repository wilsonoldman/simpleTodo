import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import TodoTabScreen from './screens/TodoTabScreen'
import StorybookUIRoot from "./storybook";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

//font awesome initialization
library.add(
  faStar
)

moment.locale('ja')

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Todos"
          component={TodoTabScreen}
          options={({navigation}) => ({
            title: "Simple Todo",
            headerRight: () => (
              __DEV__ && 
                <Button
                  title="storybook"
                  onPress={() => navigation.navigate('Storybook')}
                />
            )
          })} 
        />
        <Stack.Screen name="Storybook" component={StorybookUIRoot} />
      </Stack.Navigator>
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

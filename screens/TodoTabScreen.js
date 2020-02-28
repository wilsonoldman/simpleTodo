import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import TodosScreen from './TodosScreen'
import StorybookUIRoot from "../storybook";

const Tab = createMaterialTopTabNavigator()

export default function TodoTabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Todos" component={TodosScreen} />
      <Tab.Screen name="Pinned" component={TodosScreen} />
      <Tab.Screen name="Done" component={TodosScreen} />
    </Tab.Navigator>
  )
}


import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import TaskListScreen from './TaskListScreen'

const Tab = createMaterialTopTabNavigator()

export default function TodoTabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All" component={TaskListScreen} />
      <Tab.Screen name="Pinned" component={TaskListScreen} />
      <Tab.Screen name="Archived" component={TaskListScreen} />
    </Tab.Navigator>
  )
}

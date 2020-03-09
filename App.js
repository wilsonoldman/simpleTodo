import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as StoreProvider } from 'react-redux'
import { Provider as PaperProvider, Button } from 'react-native-paper'
import { createStackNavigator } from '@react-navigation/stack'
import StorybookUIRoot from './storybook'
import CreateTaskScreen from './screens/CreateTaskScreen'
import moment from 'moment'
import store from './store/store'
import TaskListScreen from './screens/TaskListScreen'
import { Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const Stack = createStackNavigator()
moment.locale('ja')

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Tasks"
              component={TaskListScreen}
              options={({ navigation }) =>
                __DEV__ && {
                  headerRight: props => (
                    <Button onPress={() => navigation.navigate('Storybook')}>
                      <Text>Storybook</Text>
                    </Button>
                  ),
                }
              }
            />
            {__DEV__ && (
              <Stack.Screen name="Storybook" component={StorybookUIRoot} />
            )}
            <Stack.Screen
              name="CreateTask"
              component={CreateTaskScreen}
              options={{
                headerTitle: 'Add New Task',
                headerStyle: { backgroundColor: 'rgba(0,0,0,0)' },
                headerBackImage: () => <AntDesign name="close" size={22} />,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  )
}

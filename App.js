import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as StoreProvider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import { createStackNavigator } from '@react-navigation/stack'
import StorybookUIRoot from './storybook'
import CreateTaskScreen from './screens/CreateTaskScreen'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import store from './store/store'
import TaskListScreen from './screens/TaskListScreen'
import { Button } from 'react-native-paper'
import { Text } from 'react-native'

const Stack = createStackNavigator()

//font awesome initialization
library.add(faStar)

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
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  )
}

import React from 'react'
import { Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { createStackNavigator } from '@react-navigation/stack'
import TodoTabScreen from './screens/TodoTabScreen'
import StorybookUIRoot from './storybook'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import store from './store/store'

const Stack = createStackNavigator()

//font awesome initialization
library.add(faStar)

moment.locale('ja')

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Todos"
            component={TodoTabScreen}
            options={({ navigation }) => ({
              title: 'Simple Todo',
              headerRight: function storybookButton() {
                return (
                  // eslint-disable-next-line no-undef
                  __DEV__ && (
                    <Button
                      title="storybook"
                      onPress={() => navigation.navigate('Storybook')}
                    />
                  )
                )
              },
            })}
          />
          <Stack.Screen name="Storybook" component={StorybookUIRoot} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import TaskList from '../containers/TaskList'
import PropTypes from 'prop-types'
import PureFabButton from '../components/PureFabButton'
import MenuList from '../containers/MenuList'

function TaskListScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <MenuList />
      <ScrollView>
        <TaskList />
      </ScrollView>
      <PureFabButton onPress={() => navigation.navigate('CreateTask')} />
    </View>
  )
}

TaskListScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.shape({
    params: PropTypes.object,
  }),
}

export default TaskListScreen

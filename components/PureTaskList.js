import React from 'react'
import { View, FlatList, Text, StyleSheet } from 'react-native'
import Task from './Task'
import Proptypes from 'prop-types'
import { ActivityIndicator, Colors } from 'react-native-paper'

const PureTaskList = ({ tasks, loading, onArchiveTask, onPinTask }) => {
  const events = {
    onArchiveTask,
    onPinTask,
  }

  if (loading) {
    return (
      <View style={styles.emptyBox}>
        <Text>Loading ...</Text>
        <ActivityIndicator animating={true} color={Colors.red800} />
      </View>
    )
  }

  if (tasks.length === 0) {
    return (
      <View style={styles.emptyBox}>
        <Text>No Task found</Text>
      </View>
    )
  }

  const tasksInOrder = [
    ...tasks.filter(task => task.state === 'TASK_PINNED'),
    ...tasks.filter(task => task.state !== 'TASK_PINNED'),
  ]

  return (
    <View>
      <FlatList
        data={tasksInOrder}
        renderItem={({ item }) => <Task task={item} {...events} />}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  emptyBox: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

PureTaskList.propTypes = {
  tasks: Proptypes.array,
  loading: Proptypes.bool,
  onPinTask: Proptypes.func,
  onArchiveTask: Proptypes.func,
}

export default PureTaskList

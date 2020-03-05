import React from 'react'
import {View, FlatList, Text, StyleSheet} from 'react-native'
import Task from './Task'
import Proptypes from 'prop-types'
import { ActivityIndicator, Colors } from 'react-native-paper'

const TaskList = ({tasks, loading, onArchiveTask, onPinTask }) => {
  const events = {
    onArchiveTask,
    onPinTask
  }

  if(loading){
    return (
      <View style={styles.emptyBox}>
        <Text style={{padding: 10}}>Loading ...</Text>
        <ActivityIndicator animating={true} color={Colors.red800} />
      </View>
    )
  }

  if(tasks.length === 0) {
    return (
      <View style={styles.emptyBox}>
        <Text>Nothing you need to do. Have a sheet and take a coffee!</Text>
      </View>
    )
  }

  const tasksInOrder = [
    ...tasks.filter(task => task.state === 'TASK_PINNED'),
    ...tasks.filter(task => task.state !== 'TASK_PINNED'),
  ]
  
  return(
    <View>
      <FlatList
        data={tasksInOrder}
        renderItem={({item}) =>  <Task task={item} {...events}/> }
        keyExtractor={item => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  emptyBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default TaskList

TaskList.prototype = {
  tasks: Proptypes.arrayOf(Proptypes.object)
}

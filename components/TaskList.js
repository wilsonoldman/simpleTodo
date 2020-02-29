import React from 'react'
import {View, FlatList} from 'react-native'
import Task from './Task'
import Proptypes from 'prop-types'

const TaskList = ({tasks, onArchiveTask, onPinTask }) => {
  const events = {
    onArchiveTask,
    onPinTask
  }
  
  return(
    <View>
      <FlatList
        data={tasks}
        renderItem={({item}) =>  <Task task={item} {...events}/> }
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default TaskList

TaskList.prototype = {
  tasks: Proptypes.arrayOf(Proptypes.object)
}

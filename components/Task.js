import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Checkbox } from 'react-native-paper'
import PropTypes from 'prop-types'
import { AntDesign } from '@expo/vector-icons'
import { TaskStates } from '../actions'

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <View style={styles.container}>
      <Checkbox
        status={state === TaskStates.TASK_ARCHIVED ? 'checked' : 'unchecked'}
        // TODO: popup dialog window to ask if task state is set to inbox
        onPress={() => onArchiveTask(id)}
        style={styles.checkbox}
      />
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[
          styles.title,
          state === TaskStates.TASK_ARCHIVED && styles.titleArchived,
        ]}
      >
        {title}
      </Text>
      <TouchableOpacity
        onPress={state !== TaskStates.TASK_ARCHIVED && (() => onPinTask(id))}
        style={styles.starIcon}
      >
        <AntDesign
          name="star"
          size={20}
          color={state === TaskStates.TASK_PINNED ? 'orange' : '#ccc'}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  checkbox: {
    width: 50,
  },
  title: {
    flex: 1,
    fontSize: 20,
    paddingRight: 10,
    paddingLeft: 5,
    textAlignVertical: 'center',
  },
  titleArchived: {
    color: '#777',
  },
  createdAt: {
    marginLeft: 'auto',
  },
  starIcon: {
    width: 30,
  },
})

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    state: PropTypes.string,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
}

export default Task

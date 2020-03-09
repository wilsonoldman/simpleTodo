import React, { useState } from 'react'
import { View, Platform, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'
import { CREATE_TASK } from '../constants'
import PureFabButton from '../components/PureFabButton'
import { connect } from 'react-redux'
import { addTask, TaskStates } from '../actions'
import PropTypes from 'prop-types'

const CreateTaskScreen = ({ onSavePress, navigation }) => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [pinned, setPin] = useState(false)

  const taskState = pinned ? TaskStates.TASK_PINNED : TaskStates.TASK_INBOX

  return (
    <View style={styles.container}>
      <TextInput
        label={CREATE_TASK.TITLE}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        {...(Platform.OS === 'web' && { numberOfLines: 10 })}
        multiline={true}
        label={CREATE_TASK.DESCRIPTION}
        value={desc}
        onChangeText={text => setDesc(text)}
      />
      <Button
        style={{ borderRadius: 0 }}
        icon={() => (
          <AntDesign name="star" color={pinned ? 'orange' : '#ccc'} />
        )}
        onPress={() => setPin(state => !state)}
      >
        <Text>Pin Task</Text>
      </Button>
      <PureFabButton
        icon="content-save"
        label="save"
        onPress={() => {
          onSavePress({ title, state: taskState })
          navigation.navigate('Tasks')
        }}
      />
    </View>
  )
}

const mapDispatchToProps = dispatch => ({
  onSavePress: ({ title, state }) => dispatch(addTask({ title, state })),
})

const styles = {
  container: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 5,
    bottom: 20,
  },
}

CreateTaskScreen.propTypes = {}

CreateTaskScreen.defaultProps = {}

export default connect(null, mapDispatchToProps)(CreateTaskScreen)

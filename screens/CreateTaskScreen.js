import React, { useState } from 'react'
import { ScrollView, Platform, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons'

import PropTypes, { bool } from 'prop-types'

const CreateTaskScreen = props => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [pinned, setPin] = useState(false)

  return (
    <ScrollView>
      <TextInput
        label="タイトル"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        {...(Platform.OS === 'web' && { numberOfLines: 10 })}
        multiline={true}
        label="詳細"
        value={desc}
        onChangeText={text => setDesc(text)}
      />
      <Button
        mode="contained"
        style={{ borderRadius: 0 }}
        icon={() => (
          <AntDesign name="star" color={pinned ? 'orange' : '#ccc'} />
        )}
        onPress={() => setPin(state => !state)}
      >
        <Text>Pin Task</Text>
      </Button>
    </ScrollView>
  )
}

CreateTaskScreen.propTypes = {}

CreateTaskScreen.defaultProps = {}

export default CreateTaskScreen

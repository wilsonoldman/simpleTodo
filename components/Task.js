import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, TouchableRipple } from 'react-native-paper'

const Task = () => {
  return (
    <View style={styles.task}>
      <TouchableRipple>
        <Text>hoge</Text>
      </TouchableRipple>
    </View>
  )
}

const styles = StyleSheet.create({
  task: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Task
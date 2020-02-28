import React from 'react'
import {View} from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import Task from './Task'

export const task = {
  id: 1,
  title: "test task",
}

export const actions = {
  onArchiveTask: action('onArchiveTask')
}

storiesOf('Task', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('default view', () => <Task task={task} {...actions} />)
import React from 'react'
import {View} from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import Task from './Task'

export const task = {
  id: '1',
  title: "test task",
  state: 'TASK_INBOX',
}

export const actions = {
  onArchiveTask: action('onArchiveTask'),
  onPinTask: action('onPinTask')
}

storiesOf('Task', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('default view', () => <Task task={task} {...actions} />)
  .add('archived', () => <Task task={{...task, state: 'TASK_ARCHIVED'}} {...actions} />)
  .add('pinned', () => (<Task task={{...task, state: 'TASK_PINNED'}} {...actions} />))
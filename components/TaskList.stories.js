import React from 'react'
import {} from 'react-native'
import {storiesOf} from '@storybook/react-native'
import {action} from '@storybook/addon-actions'
import TaskList from './TaskList'

const tasks = [
  {id: '1', title: 'title 1', state: 'TASK_INBOX'},
  {id: '2', title: 'title 2', state: 'TASK_INBOX'},
  {id: '3', title: 'title 3', state: 'TASK_INBOX'},
  {id: '4', title: 'title 4', state: 'TASK_INBOX'},
  {id: '5', title: 'title 5', state: 'TASK_INBOX'},
  {id: '6', title: 'title 6', state: 'TASK_INBOX'},
]

const actions = {
  onArchiveTask: action('onArchiveTask'),
  onPinTask: action('onPinTask')
}

storiesOf('TaskList', module)
  .add('default', () => <TaskList tasks={tasks} {...actions} />)
  .add('with pinned task', () => (
    <TaskList tasks={[...tasks.slice(0, tasks.length - 1), {id: '6', title: 'title 6', state: 'TASK_PINNED'}]} {...actions} />
  ))
  .add('with archived task', () => (
    <TaskList tasks={[...tasks.slice(0, tasks.length - 1), {id: '6', title: 'title 6', state: 'TASK_ARCHIVED'}]} {...actions} />
  ))
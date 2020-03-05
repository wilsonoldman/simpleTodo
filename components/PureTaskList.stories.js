import React from 'react'
import {} from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import PureTaskList from './PureTaskList'

const tasks = [
  { id: '1', title: 'title 1', state: 'TASK_INBOX' },
  { id: '2', title: 'title 2', state: 'TASK_INBOX' },
  { id: '3', title: 'title 3', state: 'TASK_INBOX' },
  { id: '4', title: 'title 4', state: 'TASK_INBOX' },
  { id: '5', title: 'title 5', state: 'TASK_INBOX' },
  { id: '6', title: 'title 6', state: 'TASK_INBOX' },
]

const actions = {
  onArchiveTask: action('onArchiveTask'),
  onPinTask: action('onPinTask'),
}

export const withPinnedTask = [
  ...tasks.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
]

// eslint-disable-next-line no-undef
storiesOf('PureTaskList', module)
  .add('default', () => <PureTaskList tasks={tasks} {...actions} />)
  .add('empty', () => <PureTaskList tasks={[]} {...actions} />)
  .add('loading', () => <PureTaskList tasks={[]} loading={true} {...actions} />)
  .add('with pinned task', () => (
    <PureTaskList tasks={withPinnedTask} {...actions} />
  ))
  .add('with archived task', () => (
    <PureTaskList
      tasks={[
        ...tasks.slice(0, tasks.length - 1),
        { id: '6', title: 'Task 6', state: 'TASK_ARCHIVED' },
      ]}
      {...actions}
    />
  ))

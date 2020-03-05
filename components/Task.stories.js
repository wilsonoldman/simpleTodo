import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import moment from 'moment'
import Task from './Task'

export const task = {
  id: '1',
  title: 'test task',
  state: 'TASK_INBOX',
  createdAt: moment().format('YYYY/MM/DD HH:mm:ss'),
}

const longTitle =
  ' sometimes it contains new lines. and hogehoge is so long. do you undestand? 時には娼婦のように。あなたははじめからすべてわかっていたのではないですか？ this is long long story. さよならの向う側に何があるっていうんです？'

const actions = {
  onArchiveTask: action('onArchiveTask'),
  onPinTask: action('onPinTask'),
}

// eslint-disable-next-line no-undef
storiesOf('Task', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('default view', () => <Task task={task} {...actions} />)
  .add('long title', () => (
    <Task
      task={{
        ...task,
        title: longTitle,
      }}
      {...actions}
    />
  ))
  .add('archived', () => (
    <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />
  ))
  .add('pinned', () => (
    <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />
  ))

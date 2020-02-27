import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Task from './Task'

storiesOf('Task', module)
  .add('default view', () => <Task />)
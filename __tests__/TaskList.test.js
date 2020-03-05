import React from 'react'
import renderer from 'react-test-renderer'
import TaskList from '../components/PureTaskList'
import { withPinnedTask } from '../components/PureTaskList.stories'
import Task from '../components/Task'

describe('TaskList', () => {
  it('reneders pinned tasks at the start of the list', () => {
    const events = { onPinTask: jest.fn(), onArchiveTask: jest.fn() }
    const tree = renderer.create(
      <TaskList tasks={withPinnedTask} {...events} />
    )
    const rootElement = tree.root
    const listofTasks = rootElement.findAllByType(Task)
    expect(listofTasks[0].props.task.title).toBe('Task 6 (pinned)')
  })
})

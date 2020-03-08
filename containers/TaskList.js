import { connect } from 'react-redux'
import { VisibilityFilters } from '../actions/index'
import PureTaskList from '../components/PureTaskList'
import { TaskStates, pinTask, archiveTask } from '../actions'

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return tasks
    case VisibilityFilters.SHOW_PINNED:
      return tasks.filter(task => task.state === TaskStates.TASK_PINNED)
    case VisibilityFilters.SHOW_ARCHIVED:
      return tasks.filter(task => task.state === TaskStates.TASK_ARCHIVED)
    case VisibilityFilters.SHOW_INBOX:
      return tasks.filter(
        task =>
          task.state === TaskStates.TASK_INBOX ||
          task.state === TaskStates.TASK_PINNED
      )
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  tasks: getVisibleTasks(state.tasks, state.visibility_filter),
})

const mapDispatchToProps = dispatch => ({
  onPinTask: id => dispatch(pinTask(id)),
  onArchiveTask: id => dispatch(archiveTask(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PureTaskList)

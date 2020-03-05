import { combineReducers } from 'redux'
import { VisibilityFilters, TaskStates } from '../actions/index'

const initialState = {
  tasks: [],
  visibility_filter: VisibilityFilters.SHOW_ALL,
}

const taskReducer = (state = [], action) => {
  switch (action.type) {
    case 'PIN_TASK':
      return state.map(task => {
        if (task.id === action.id) {
          return task.state === TaskStates.TASK_PINNED
            ? { ...task, state: TaskStates.TASK_INBOX }
            : { ...task, state: TaskStates.TASK_PINNED }
        }
        return task
      })

    case 'ARCHIVE_TASK':
      return state.map(task => {
        if (task.id === action.id) {
          return task.state === TaskStates.TASK_ARCHIVED
            ? { ...task, state: TaskStates.TASK_INBOX }
            : { ...task, state: TaskStates.TASK_ARCHIVED }
        }
        return task
      })

    default:
      return state
  }
}

const visibilityFilterReducer = (
  state = initialState.visibility_filter,
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default combineReducers({
  tasks: taskReducer,
  visibility_filter: visibilityFilterReducer,
})

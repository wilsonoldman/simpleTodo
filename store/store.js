import { createStore } from 'redux'
import reducers from '../reducers/reducers'
import { TaskStates } from '../actions'

const defaultState = {
  tasks: [
    { id: '1', title: 'hello', state: TaskStates.TASK_INBOX },
    { id: '2', title: 'world', state: TaskStates.TASK_INBOX },
    { id: '3', title: 'japanese', state: TaskStates.TASK_PINNED },
    { id: '4', title: 'people', state: TaskStates.TASK_ARCHIVED },
  ],
}

const store = createStore(
  reducers,
  defaultState,
  // for redux dev tool
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store

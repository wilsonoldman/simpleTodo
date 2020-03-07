export const pinTask = id => ({
  type: 'PIN_TASK',
  id,
})

export const archiveTask = id => ({
  type: 'ARCHIVE_TASK',
  id,
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_PINNED: 'SHOW_PINNED',
  SHOW_ARCHIVED: 'SHOW_ARCHIVED',
}

export const TaskStates = {
  TASK_INBOX: 'TASK_INBOX',
  TASK_PINNED: 'TASK_PINNED',
  TASK_ARCHIVED: 'TASK_ARCHIVED',
}

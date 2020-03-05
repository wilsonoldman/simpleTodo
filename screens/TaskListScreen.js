import React, { useEffect } from 'react'
import { View } from 'react-native'
import TaskList from '../containers/TaskList'
import PropTypes from 'prop-types'
import { setVisibilityFilter, VisibilityFilters } from '../actions'
import { connect } from 'react-redux'

function TaskListScreen({ navigation, route, onChangeTab }) {
  useEffect(() => {
    const unsub = navigation.addListener('focus', () => {
      if (route.name === 'Archived') {
        onChangeTab(VisibilityFilters.SHOW_ARCHIVED)
      } else if (route.name === 'All') {
        onChangeTab(VisibilityFilters.SHOW_ALL)
      } else {
        onChangeTab(VisibilityFilters.SHOW_PINNED)
      }
    })
    return unsub
  })

  return (
    <View>
      <TaskList />
    </View>
  )
}

const mapStateToProps = state => ({
  filter: state.visibility_filter,
})

const mapDispatchToProps = dispatch => ({
  onChangeTab: filter => dispatch(setVisibilityFilter(filter)),
})

TaskListScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.shape({
    params: PropTypes.object,
  }),
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListScreen)

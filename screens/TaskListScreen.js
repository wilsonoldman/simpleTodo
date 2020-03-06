import React from 'react'
import { View, ScrollView } from 'react-native'
import TaskList from '../containers/TaskList'
import PropTypes from 'prop-types'
import { setVisibilityFilter } from '../actions'
import { connect } from 'react-redux'
import PureFabButton from '../components/PureFabButton'

function TaskListScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <TaskList />
      </ScrollView>
      <PureFabButton onPress={() => navigation.navigate('CreateTask')} />
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

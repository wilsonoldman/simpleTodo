import React from 'react'
import { connect } from 'react-redux'
import PureMenuList from '../components/PureMenuList'
import { TITLES } from '../constants'
import { setVisibilityFilter } from '../actions'

const mapStateToProps = state => ({
  data: Object.values(TITLES).map(value => ({ title: value })),
  currentFilterTitle: TITLES[state.visibility_filter],
})

const mapDispatchToProps = dispatch => ({
  onItemPress: title =>
    dispatch(
      setVisibilityFilter(
        Object.keys(TITLES).filter(key => TITLES[key] === title)[0]
      )
    ),
})

export default connect(mapStateToProps, mapDispatchToProps)(PureMenuList)

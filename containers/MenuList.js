import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Menu } from 'react-native-paper'
import { connect } from 'react-redux'
import { VisibilityFilters, setVisibilityFilter } from '../actions'
import PropTypes from 'prop-types'

const MenuList = ({ anchorTitle, setVisibility }) => {
  const [visible, setVisible] = useState(false)
  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  return (
    <View style={styles.container}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Menu.Item
            title={anchorTitle}
            onPress={openMenu}
            style={styles.anchorButton}
          />
        }
      >
        <Menu.Item
          title="All"
          onPress={() => {
            setVisibility(VisibilityFilters.SHOW_ALL)
            closeMenu()
          }}
          style={anchorTitle === 'ALL' ? styles.selectedItem : {}}
        />
        <Menu.Item
          title="PINNED"
          onPress={() => {
            setVisibility(VisibilityFilters.SHOW_PINNED)
            closeMenu()
          }}
          style={anchorTitle === 'PINNED' ? styles.selectedItem : {}}
        />
        <Menu.Item
          title="ARCHIVED"
          onPress={() => {
            setVisibility(VisibilityFilters.SHOW_ARCHIVED)
            closeMenu()
          }}
          style={anchorTitle === 'ARCHIVED' ? styles.selectedItem : {}}
        />
      </Menu>
    </View>
  )
}

const titles = {
  [VisibilityFilters.SHOW_ALL]: 'ALL',
  [VisibilityFilters.SHOW_PINNED]: 'PINNED',
  [VisibilityFilters.SHOW_ARCHIVED]: 'ARCHIVED',
}

const mapStateToProps = state => ({
  anchorTitle: titles[state.visibility_filter],
})

const mapDispatchToProps = dispatch => ({
  setVisibility: filter => dispatch(setVisibilityFilter(filter)),
})

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  anchorButton: {
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  selectedItem: {
    backgroundColor: '#ddd',
  },
})

MenuList.propTypes = {
  anchorTitle: PropTypes.string,
  setVisible: PropTypes.func,
}

MenuList.defaultProps = {
  anchorTitle: '',
  setVisible: () => {},
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuList)

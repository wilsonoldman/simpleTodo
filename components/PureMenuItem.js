import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Menu } from 'react-native-paper'
import PropTypes from 'prop-types'

const PureMenuItem = ({ title, onItemPress, selected }) => {
  return (
    <View>
      <Menu.Item
        title={title}
        onPress={() => onItemPress(title)}
        style={selected && styles.selectedItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  selectedItem: {
    backgroundColor: '#ddd',
  },
})

PureMenuItem.propTypes = {}

PureMenuItem.defaultProps = {
  selected: false,
}

export default PureMenuItem

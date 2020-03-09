import React from 'react'
import { StyleSheet } from 'react-native'
import { FAB } from 'react-native-paper'
import PropTypes from 'prop-types'

const PureFabButton = ({ onPress, icon, label }) => {
  return <FAB icon={icon} onPress={onPress} style={styles.fab} label={label} />
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 5,
    bottom: 20,
  },
})

PureFabButton.propTypes = {
  onPress: PropTypes.func,
  icon: PropTypes.string,
  label: PropTypes.string,
}

PureFabButton.defaultProps = {
  icon: 'plus',
  label: '',
  onPress: () => {},
}

export default PureFabButton

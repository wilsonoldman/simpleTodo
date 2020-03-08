import React, { useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { Menu } from 'react-native-paper'
import PropTypes from 'prop-types'
import PureMenuItem from './PureMenuItem'

const PureMenuList = ({ data, onItemPress, currentFilterTitle }) => {
  const [visible, setVisible] = useState(false)
  const openMenu = () => setVisible(true)
  const closeMenu = () => setVisible(false)

  const withSetVisible = title => {
    onItemPress(title)
    setVisible(false)
  }

  return (
    <View style={styles.container}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Menu.Item
            title={currentFilterTitle}
            onPress={openMenu}
            style={styles.anchorMenu}
          />
        }
      >
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <PureMenuItem
              title={item.title}
              onItemPress={title => withSetVisible(title)}
              selected={item.title === currentFilterTitle}
            />
          )}
        />
      </Menu>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  anchorMenu: {
    backgroundColor: '#fff',
    borderRadius: 2,
  },
})

PureMenuList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  currentFilterTitle: PropTypes.string,
}

PureMenuList.defaultProps = {
  data: [
    {
      title: '',
    },
  ],
  currentFilterTitle: '',
}

export default PureMenuList

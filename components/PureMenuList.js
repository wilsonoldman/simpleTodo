import React, { useState } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { Menu, Button } from 'react-native-paper'
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
          <Button
            onPress={openMenu}
            labelStyle={styles.anchorButtonLabel}
            icon="menu-down"
            contentStyle={styles.anchorButtonContent}
          >
            {currentFilterTitle}
          </Button>
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
    margin: 15,
  },
  anchorButtonLabel: {
    color: '#333',
  },
  anchorButtonContent: { flexDirection: 'row-reverse', paddingLeft: 15 },
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

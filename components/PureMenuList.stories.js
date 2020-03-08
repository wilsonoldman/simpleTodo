import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import PureMenuList from './PureMenuList'

const data = [{ title: 'Menu 1' }, { title: 'Menu 2' }, { title: 'Menu 3' }]

const actions = {
  onItemPress: action('Pressed!'),
}

storiesOf('PureMenuList', module)
  .add('default', () => (
    <PureMenuList data={data} currentFilterTitle={'MENU'} {...actions} />
  ))
  .add('no menu', () => (
    <PureMenuList data={[]} currentFilterTitle={'MENU'} {...actions} />
  ))

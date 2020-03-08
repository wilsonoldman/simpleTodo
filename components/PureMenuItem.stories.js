import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import PureMenuItem from './PureMenuItem'

storiesOf('PureMenuItem', module)
  .add('default', () => (
    <PureMenuItem title="Menu 1" onPress={action('onPress')} />
  ))
  .add('selected', () => (
    <PureMenuItem title="Menu 1" onPress={action('onPress')} selected />
  ))

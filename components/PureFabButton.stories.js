import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import PureFabButton from './PureFabButton'

const onPress = action('onPress')

storiesOf('PureFabButton', module).add('default', () => {
  ;<PureFabButton onPress={onPress} />
})

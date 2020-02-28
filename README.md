# how to use storybook
add *.stories.js files into ./components or ./containers(the directories can be set in package.json `config.react-native-storybook-loader`)

`yarn rnstl` then `expo start`

The tab screen which is made of StorybookUIRoot will appear in the right of the header.

## Notes
Latest react-native-svg version is ^11.0.0 but use `react-native-svg@9.13.3` to avoid the following error. [open this issue](https://github.com/react-native-community/react-native-svg/issues/1117)

<font color="Orange">Error while updating property 'fill' of a view managed by: RNSVGReact</font>


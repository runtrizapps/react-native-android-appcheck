import React from 'react'
import {
  CheckPackage
} from 'react-native-android-appcheck'

class App extends React.Component<{}> {

  componentDidMount() {
    CheckPackage.show('CheckPackage')
  }

  render() {
    return false
  }
}

export default App

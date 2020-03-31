/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import RegisterComponent from './src/components/Register.component';

export default class App extends React.Component {
  render() {
    return (
      <View style={containerStyles}>
        <RegisterComponent />
      </View>
    );
  }
}

const containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

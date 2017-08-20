import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
  _onPressButtonES() {
    fetch('http://esp8266.local/modus/e')
  }
  _onPressButtonUHR() {
    fetch('http://esp8266.local/modus/u')
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressButtonES} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>"ES IST" nicht mehr anzeigen./ "ES IST" anzeigen.</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={this._onPressButtonUHR}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>"UHR" öfter anzeigen / "UHR" weniger anzeigen.</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 180,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'rgba(44, 62, 80,1.0)'
  },
  buttonText: {
    padding: 20,
    color: 'white',
    textAlign: 'center'
  }
})

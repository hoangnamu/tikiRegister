import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  CheckBox,
  Button,
} from 'react-native';
import style from '../styles/Register.style';
import registerString from '../strings/Register.string';
import registerColor from '../colors/Register.color';

export default class RegisterComponent extends Component {
  render() {
    return (
      <ScrollView>
        <View style={style.containerVertical}>
          <Image
            source={require('../image/wallpaper.png')}
            style={style.image}
          />
          <TextInput
            style={style.textInput}
            placeholder={registerString.name}
          />
          <TextInput
            style={style.textInput}
            placeholder={registerString.phoneNumber}
          />
          <TextInput
            style={style.textInput}
            placeholder={registerString.email}
          />
          <TextInput
            style={style.textInput}
            placeholder={registerString.password}
          />
          <View style={style.checkBoxContainer}>
            <CheckBox style={style.checkBoxStyle} />
            <Text style={style.checkBoxTile}>{registerString.maleText}</Text>
            <CheckBox style={style.checkBoxStyle} />
            <Text style={style.checkBoxTile}>{registerString.femaleText}</Text>
          </View>
          <View style={style.registerButtonContainer}>
            <Button title={registerString.registerButtonText} color={registerColor.registerButtonColor} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

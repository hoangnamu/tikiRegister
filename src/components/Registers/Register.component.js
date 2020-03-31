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

export default class RegisterComponent extends Component {
  render() {
    return (
      <ScrollView>
        <View style={style.containerVertical}>
          <Image
            source={require('../../image/wallpaper.png')}
            style={style.image}
          />
          <TextInput style={style.textInput} placeholder="Họ tên" />
          <TextInput style={style.textInput} placeholder="Số điện thoại" />
          <TextInput style={style.textInput} placeholder="Email" />
          <TextInput style={style.textInput} placeholder="Mật khẩu" />
          <View style={style.checkBoxContainer}>
            <CheckBox style={style.checkBoxStyle} />
            <Text style={style.checkBoxTile}>Nam</Text>
            <CheckBox style={style.checkBoxStyle} />
            <Text style={style.checkBoxTile}>Nữ</Text>
          </View>
          <View style={style.registerButtonContainer}>
            <Button title="ĐĂNG KÍ" color="" />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  containerVertical: {
    flex: 1,
    flexDirection: 'column',
  },
  checkBoxContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: 480,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    resizeMode: 'stretch',
  },
  textInput: {
    flex: 1,
    margin: 10,
    borderColor: 'grey',
    borderBottomWidth: 1,
  },
  checkBoxStyle: {
    margin: 5,
  },
  checkBoxTile: {
    fontSize: 15,
    color: 'grey',
  },
  registerButtonContainer: {
    marginTop: 30,
    margin: 10,
  },
});

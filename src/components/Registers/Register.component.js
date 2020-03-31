import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  CheckBox,
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
          <View style={style.containerHorizontal}>
            <Text >check box here</Text>
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
  containerHorizontal: {
    flex: 1,
    flexDirection: 'row',
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
    borderRadius: 3,
  },
});

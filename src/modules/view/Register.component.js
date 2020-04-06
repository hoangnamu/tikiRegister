import React, {Component} from 'react';
import {
  TextInput,
  View,
  ScrollView,
  Image,
  CheckBox,
  Button,
  Alert,
  Text,
} from 'react-native';
import style from './Register.style';
import registerString from '../resources/strings/Register.string';
import registerColor from '../resources/colors/Register.color';
import MyDatePicker from './Datepicker.component';
import Axios from 'axios';
import UsersAPI from '../repository/UsersAPI';

export default class RegisterComponent extends Component {
  state = {
    isLoading: true,
    users: 'empty',
  };
  // fetchUser() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(data => this.setState({users: data, isLoading: false}))
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }
  // async fetchWithAsync() {
  //   try {
  //     await Axios.get('https://jsonplaceholder.typicode.com/users').then(
  //       response => this.setState({users: response.data, isLoading: false}),
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  async onBtnPress() {
    const getData = await new UsersAPI().getUsers();
    this.setState({users: getData.data, isLoading: false});
    console.log('print data : ');
    console.log(this.state.users);
  }

  render() {
    return (
      <ScrollView>
        <View style={style.containerVertical}>
          <Image
            source={require('../resources/image/wallpaper.png')}
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
          <MyDatePicker />
          {/* <View style={style.checkBoxContainer}>
            <CheckBox style={style.checkBoxStyle} />
            <Text style={style.checkBoxTile}>{registerString.maleText}</Text>
            <CheckBox style={style.checkBoxStyle} />
            <Text style={style.checkBoxTile}>{registerString.femaleText}</Text>
          </View> */}
          <View style={style.registerButtonContainer}>
            <Button
              title={registerString.registerButtonText}
              color={registerColor.registerButtonColor}
              onPress={() => {
                this.onBtnPress();
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

import {StyleSheet} from 'react-native';
import color from '../colors/Register.color';

export default StyleSheet.create({
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
    borderColor: color.textInput,
    borderBottomWidth: 1,
  },
  checkBoxStyle: {
    margin: 5,
  },
  checkBoxTile: {
    fontSize: 15,
    color: color.textInput,
  },
  registerButtonContainer: {
    flex: 1,
    marginTop: 30,
    margin: 20,
  },
});

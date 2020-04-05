import React, {Component} from 'react';
import DatePicker from 'react-native-datepicker';
import style from '../view/Register.style';
import registerString from '../strings/Register.string';

function getToday() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  return dd + '-' + mm + '-' + yyyy;
}

export default class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {date: ''};
  }

  render() {
    return (
      <DatePicker
        style={style.textInput}
        date={this.state.date}
        mode="date"
        placeholder={registerString.calendarTitle}
        format={registerString.calendarFormat}
        minDate={registerString.calendarMinDate}
        maxDate={getToday()}
        confirmBtnText={registerString.calendarConfirm}
        cancelBtnText={registerString.calendarCancel}
        // customStyles={{
        //   dateIcon: {
        //     position: 'absolute',
        //     left: 0,
        //     top: 4,
        //     marginLeft: 0,
        //   },
        //   dateInput: {
        //     marginLeft: 36,
        //   },
        //   // ... You can check the source to find the other keys.
        // }}
        onDateChange={date => {
          this.setState({date: date});
        }}
      />
    );
  }
}

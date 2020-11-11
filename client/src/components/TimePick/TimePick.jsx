import React, { useState } from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

const TimePick = ({id, setGameTime, value}) => {
    return (
        <DatePicker
        id={id}
        selected={value}
        onChange={time => setGameTime(time)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
    );
  };

export default TimePick;
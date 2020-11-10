import React, { useState } from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

const TimePick = (props) => {
    const [startTime, setStartTime] = useState(new Date());
    return (
        <DatePicker
        id={props.id}
        selected={startTime}
        onChange={time => setStartTime(time)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
      />
    );
  };

export default TimePick;
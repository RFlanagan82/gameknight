import React, { useState } from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

const DatePick = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker id={props.id} selected={startDate} onChange={date => setStartDate(date)} />
    );
  };

export default DatePick;
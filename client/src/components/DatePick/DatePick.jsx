import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePick = ({ id, setDateTime, value }) => {
  return (
    <DatePicker
      id={id}
      selected={value}
      onChange={(date) => setDateTime(date)}
    />
  );
};

export default DatePick;

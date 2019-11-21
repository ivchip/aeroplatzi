import React, { useState } from "react";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "../assets/styles/components/DatePicker.scss";

function DatePicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);
  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };
  return (
    <div className="app__datePicker">
      <DateRangePicker
        startDate={startDate}
        startDateId="start-date"
        startDatePlaceholderText='Inicio'
        endDate={endDate}
        endDateId="end-date"
        endDatePlaceholderText='Fin'
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => setFocusedInput(focusedInput)}
      />
    </div>
  );
}

export default DatePicker;

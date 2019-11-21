import React from 'react';

const Calendar = (props) => {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type="date"
        name="trip-start"
        min="2019-01-01"
        max="2025-12-31"
      />
    </>
  );
};

export default Calendar;
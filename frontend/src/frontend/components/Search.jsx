import React, { useState } from 'react';
import 'react-dates/initialize';
import { connect } from 'react-redux';
import { searchFligths } from '../actions';
import { DateRangePicker } from "react-dates";
import '../assets/styles/components/DatePicker.scss';
import '../assets/styles/components/Search.scss';

const route = [
  {
    key: 'BOG',
    codeCity: 'BOG',
    nameCity: 'Bogotá'
  },
  {
    key: 'BAQ',
    codeCity: 'BAQ',
    nameCity: 'Barranquilla'
  },
  {
    key: 'MDE',
    codeCity: 'MDE',
    nameCity: 'Medellín'
  }
];

const Search = (props) => {
  const [form, setValues] = useState({
    from: '',
    to: '',
    startDate: '',
    endDate: '',
  });
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate);
    setEndDate(endDate);
    setValues({
      ...form,
      startDate: new Date(startDate).toISOString().slice(0,10),
      endDate: new Date(endDate).toISOString().slice(0,10),
    })
  };

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchFligths(form, '/flights');
  };

  return (
    <section className='main'>
      <form className='search--form' onSubmit={handleSubmit}>
        <div className='item1' >
          <label className='container'>
            <input 
              type='checkbox'
              aria-required='false'
              aria-invalid='false' 
            />
            <span className='checkmark'></span>
            <span>Solo ida</span>
          </label>
        </div >
        <div className='item2 departure'>
          <i className='ico-fas fas fa-plane glyphicon'></i>
          <label className='lbl-title'>Ida</label>
          <select 
            type='text'
            className='input__search'
            name='from'
            onChange={handleInput}
          >
            <option value='0'>Selecciona el Origen</option>
            {
              route.map(item => <option key={item.key} value={item.codeCity}>{item.nameCity}</option>)
            }
          </select>
        </div>
        <div className='item2 destination'>
          <i className='ico-fas fas fa-plane glyphicon'></i>
          <label className='lbl-title'>Destino</label>
          <select
            type='text'
            className='input__search'
            name='to'
            onChange={handleInput}
          >
            <option value='0'>Selecciona el Destino</option>
            {
              route.map(item => <option key={item.key} value={item.codeCity}>{item.nameCity}</option>)
            }
          </select>
        </div>
        <div className='item4'>
          <i className='ico-fas far fa-calendar-alt glyphicon'></i>
          <label className='lbl-title'>Fecha ida</label>
          <label className='lbl-title'>Fecha regreso</label>
          <div className='subitem2'>
          <div className="app__datePicker">
            <DateRangePicker
              startDate={startDate}
              startDateId="startDate"
              startDatePlaceholderText='Inicio'
              endDate={endDate}
              endDateId="endDate"
              endDatePlaceholderText='Fin'
              onDatesChange={handleDatesChange}
              focusedInput={focusedInput}
              onFocusChange={focusedInput => setFocusedInput(focusedInput)}
              displayFormat="YYYY-MM-DD"
            />
          </div>
          </div>
        </div>
        <div className='item2 passenger'>
          <i className="ico-fas fas fa-user glyphicon"></i>
          <label className='lbl-title'>Pasajeros</label>
          <select
            type='text'
            className='input__search'
            name='passager'
            onChange={handleInput}
          >
            <option value='1'>1 Pasajeros</option>
            <option value='2'>2 Pasajeros</option>
            <option value='3'>3 Pasajeros</option>
            <option value='4'>4 Pasajeros</option>
            <option value='5'>5 Pasajeros</option>
          </select>
        </div>
        <div className='item3'>
          <button className='button__search' type='submit'>BUSCAR VUELOS ></button>
        </div>
      </form>
    </section>
  );
};

const mapDispatchToProps = {
  searchFligths,
};

export default connect(null, mapDispatchToProps)(Search);

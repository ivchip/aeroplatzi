import React from 'react';
import DatePicker from './DatePicker';
import '../assets/styles/components/Search.scss';

const Search = () => (
  <section className='main'>
    <div className='item1' >
      <label className='container'>
        <input type='checkbox' aria-required='false' aria-invalid='false' />
        <span className='checkmark'></span>
        <span>Solo ida</span>
      </label>
    </div >
    <div className='item2'>
      <i className='ico-fas fas fa-plane glyphicon'></i>
      <label className='lbl-title'>Ida</label>
      <select type='text' className='input__search'>
        <option value='0'>Selecciona el Origen</option>
      </select>
    </div>
    <div className='item2'>
      <i className='ico-fas fas fa-plane glyphicon'></i>
      <label className='lbl-title'>Destino</label>
      <select type='text' className='input__search'>
        <option value='0'>Selecciona el Destino</option>
      </select>
    </div>
    <div className='item2'>
      <i className='ico-fas far fa-calendar-alt glyphicon'></i>
      <label className='lbl-title'>Fecha ida</label>
      <div className='subitem2'>
        <DatePicker />
      </div>
    </div>
    <div className='item2'>
      <i className="ico-fas fas fa-user glyphicon"></i>
      <label className='lbl-title'>Pasajeros</label>
      <select type='text' className='input__search'>
        <option value='1'>1 Pasajeros</option>
        <option value='2'>2 Pasajeros</option>
        <option value='3'>3 Pasajeros</option>
        <option value='4'>4 Pasajeros</option>
        <option value='5'>5 Pasajeros</option>
      </select>
    </div>
    <div className='item3'>
      <button className='button__search'>BUSCAR VUELOS ></button>
    </div>
  </section>
);

export default Search;

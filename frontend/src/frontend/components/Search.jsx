import React from 'react';
import SelectorFlyLugares from "./SelectorFlyLugares";
import Calendar from "./Calendar";
import '../assets/styles/components/Search.scss';

const Search = () => {
  let optionsPersonas = [];
  for (let index = 1; index <= 5; index++) {
    optionsPersonas.push(index);
  }

  return (
    <main className="searchFly-main">
      <h1>Busca tu Vuelo</h1>
      <div className='searchFly-container'>
        <form action="/#" className='searchFly-form'>
        <div className="selectDestinos">
          <label>
            <input type="checkbox" value="first_checkbox" />
            Solo ida
          </label>
          <SelectorFlyLugares title='IDA, Seleccione el Origen' />
          <SelectorFlyLugares title='Destino, Seleccione el Destino' />
        </div>

        <div className="selectDate">
          <Calendar id='startDate' label='Fecha de Salida:' />
          <Calendar id='endDate' label='Fecha de Llegada:' />
        </div>

        <div className="selectPersonas">
          <label htmlFor="numberPersons">Numero de personas</label>
          <select name="flyIda" id="numberPersons">
            {optionsPersonas.map((item) => <option value={item.toFixed()} key={item}>{item} persona</option>)}
          </select>
          <input type="submit" value="Buscar vuelo" />
        </div>
        </form>
      </div>
    </main>
  );
};

export default Search;

import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => (
  <section className='main'>
    <div>
      <label className='container'>
        <input type='checkbox' aria-required='false' aria-invalid='false' />
        <span className='checkmark'></span>
        <span>Solo ida</span>
      </label>
    </div>
    <div className=''>
      <input type='text' className='input__search' placeholder='Buscar...' />
    </div>
  </section>
);

export default Search;

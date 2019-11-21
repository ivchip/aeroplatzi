import React from 'react';

const placeList = {
  nacionales: ['Bogota', 'Cartagena', 'Medellín', 'Pasto'],
  internacionales: ['París', 'Madrid', 'Sao Paulo'],
};

const SelectFlyLugares = (props) => {
  return (
    <select name="flyIda">
      <option value="100">{props.title}</option>
        <optgroup label="Nacionales">
          {
            placeList.nacionales.map((item, index) => 
              <option key={index} value={index}>{item}</option>
            )
          }
        </optgroup> 
        <optgroup label="Internacional">
        {
          placeList.internacionales.map((item, index) => 
            <option key={index} value={index + 1000}>{item}</option>
          )
        }
      </optgroup> 
    </select>
  );
};

export default SelectFlyLugares;
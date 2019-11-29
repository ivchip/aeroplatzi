import React from 'react';
import '../assets/styles/components/FlightDetails.scss';

const FlightDetails = (props) => {
  const { id, flightNumber, from, to, price, arrivalTime, departureTime, hours, minutes, currency, aircraftKind } = props;
  return (
    <div class="flights">
      <div class="segment-detail">
        <div class="additional-info">
          <span>{hours}h</span>
          <span>{minutes}m - </span>
          <span>Vuelo directo</span>
        </div>
        <div class="location-wrapper">
          <div>
            <span>Salida {from}</span>
            <p>{arrivalTime}</p>
          </div>
          <div>
            --->
          </div>
          <div>
            <span>Llegada {to}</span>
            <p>{departureTime}</p>
          </div>
        </div>
        <div class="flight-information">
          <p>{flightNumber} {aircraftKind}</p>
        </div>
      </div>
      <div class="price">
        <p>Desde</p>
        <h4>{currency} {price}</h4>
      </div>
    </div>
  )
}

export default FlightDetails;
import React from 'react';
import '../assets/styles/components/Flights.scss';

const Flights = ({ children, title }) => (
  <section class="flights-container">
    <div class="route-header">
      <h3>{title}</h3>
    </div>
    {children}
  </section>
);

export default Flights;
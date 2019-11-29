import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Flights from '../components/Flights';
import FlightDetails from '../components/FlightDetails';

const ResultSearch = ({departure, returnRoute}) => {
  return (
    <>
    <Header />
    {
      departure.length > 0 && (
        <Flights>
          {departure.map(item => (
            <FlightDetails key={item.id} {...item} />))}
        </Flights>
      )
    }
    {
      returnRoute.length > 0 && (
        <Flights>
          {returnRoute.map(item => (
            <FlightDetails key={item.id} {...item} />))}
        </Flights>
      )
    }
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    departure: state.routes.departure,
    returnRoute: state.routes.return
  };
};

export default connect(mapStateToProps, null)(ResultSearch);

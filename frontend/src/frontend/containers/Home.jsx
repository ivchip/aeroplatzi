import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';

const Home = () => {
  return (
    <Search />
  );
};

const mapStateToProps = (state) => {
  return {
    routes: state.routes,
  };
};

export default connect(mapStateToProps, null)(Home);

/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProTypes from 'prop-types';
import { loginUser } from '../actions';
import googleIcon from '../assets/static/google-icon.png';
import facebookIcon from '../assets/static/facebook-icon.png';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(form, '/');
  };

  return (
    <>
      <section className='login'>
        <div className='login__container'>
          <h2>Inicia sesión</h2>
          <form className='login__container--form' onSubmit={handleSubmit}>
            <input
              className='input__login'
              name='email'
              type='text'
              placeholder='Correo'
              onChange={handleInput}
              required
            />
            <input
              className='input__login'
              name='password'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
              required
            />
            <button className='button'>Iniciar sesión</button>
            <div className='login__container--remember-me'>
              <label htmlFor='cbox1'>
                <input type='checkbox' id='cbox1' value='first_checkbox' />
                Recuérdame
              </label>
              <a href='/'>Olvidé mi contraseña</a>
            </div>
          </form>
          <section className='login__container--social-media'>
            <div>
              <img src={googleIcon} alt='' />
              <p>Inicia sesión con Google</p>
            </div>
            <div>
              <img src={facebookIcon} alt='' />
              <p>Inicia sesión con Facebook</p>
            </div>
          </section>
          <p className='login__container--register'>
            No tienes ninguna cuenta&nbsp;
            <Link to='/register'>
              Regístrate
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

Login.proTypes = {
  email: ProTypes.string,
  password: ProTypes.string,
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Login);

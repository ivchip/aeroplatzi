import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/aeroplatzi-logo.png';
import userIcon from '../assets/static/user-icon.png';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

const Header = (props) => {
  const { user, register } = props;
  const hasUser = Object.keys(user).length > 0;
  const hasRegister = Object.keys(register).length > 0;
  const handleLogout = () => {
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    document.cookie = 'token=';
    props.logoutRequest();
    window.location.href = '/login';
  };
  let notify;
  if (hasRegister) {
    if (register.message) {
      notify = () => toast.success(register.message);
    } else {
      notify = () => toast.error(register.error);
    }
    notify();
  }
  
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='AeroPlatzi' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} alt='' />}
            <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? (
            <>
              <li>
                <a href='/'>{user.name}</a>
              </li>
              <li>
                <a href='#logout' onClick={handleLogout}>Cerrar Sesión</a>
              </li>
            </>
            ) : (
            <li>
              <Link to='/login'>
                Iniciar sesión
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    register: state.register,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

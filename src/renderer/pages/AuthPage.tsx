/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
import { useState } from 'react';

import { useSelector } from 'react-redux';

import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

import '../css/auth.css';

const AuthPage = () => {
  useSelector((state) => console.log(state));

  const [login, setLogin] = useState(true);

  return (
    <div className="auth">
      <div className="login">
        <div className="login-header">
          <h2
            className={login ? 'active' : 'nonactive'}
            onClick={() => setLogin(true)}
          >
            {' '}
            sign in{' '}
          </h2>
          <h2
            className={login ? 'nonactive' : 'active'}
            onClick={() => setLogin(false)}
          >
            {' '}
            sign up{' '}
          </h2>
        </div>
        {login ? <Login /> : <Register />}
      </div>
    </div>
  );
};

export default AuthPage;

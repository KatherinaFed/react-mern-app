import { useFormik } from 'formik';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import loginImg from '../../../assets/loginImg.png';
import { useAppDispatch } from '../../hooks/hook';

import { login } from '../../store/auth/authThunk';
import Input from './Input';
import {
  Form,
  LeftSide,
  LeftSideContainer,
  LoginWrapper,
  RightSide,
} from './styles';

interface LoginI {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
    } as LoginI,
    onSubmit: (values) => {
      dispatch(login(values.email, values.password));
    },
  });

  return (
    <LoginWrapper>
      <LeftSide>
        <LeftSideContainer>
          <div className="app-name">
            <p>Friends & Events</p>
          </div>

          <div className="form-container">
            <div className="header-text">Login</div>
            <Form onSubmit={handleSubmit}>
              <input
                id="email"
                type="text"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />

              <button type="submit">Login</button>
            </Form>

            <div className="signup">
              <NavLink style={{ color: 'white' }} to="/signup">
                Don't have an account? Sign Up
              </NavLink>
            </div>
          </div>
        </LeftSideContainer>
      </LeftSide>
      <RightSide></RightSide>
    </LoginWrapper>
  );
};

export default LoginPage;

import { Navigate, NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hook';

import Input from './Input';
import LoginForm from './LoginForm';
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
  const { isAuth } = useAppSelector((state) => state.auth);

  if (isAuth) {
    return <Navigate to='/' />;
  }

  return (
    <LoginWrapper>
      <LeftSide>
        <LeftSideContainer>
          <div className="app-name">
            <p>Friends & Events</p>
          </div>

          <div className="form-container">
            <div className="header-text">Login</div>
            {/* <LoginForm login={login} /> */}
            <LoginForm />

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

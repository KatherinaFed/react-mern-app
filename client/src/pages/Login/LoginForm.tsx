import { useFormik } from 'formik';
import { TUserTokens } from '../../context/auth/AuthProvider';
import { useAppDispatch } from '../../hooks/hook';
import useAuth from '../../hooks/useAuth';
import { authAPI } from '../../services/api';
import { setUserData } from '../../store/auth/authSlice';
import { auth } from '../../store/auth/authThunk';

import { Form } from './styles';

interface LoginI {
  email: string;
  password: string;
}

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { login } = useAuth();

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      email: '',
      password: '',
    } as LoginI,
    onSubmit: async (value) => {
      try {
        const { email, password } = value;
        const response = await authAPI.login({ email, password });

        const { user, accessToken, refreshToken, status } = response;

        if (status === 'OK') {
          const tokens: any = { accessToken, refreshToken };
          login(tokens);
          const { id, email, username } = user;
          dispatch(auth());
          dispatch(setUserData({ userId: id, email, username, isAuth: true }));
        } else {
          console.error('Username or Password is incorrect');
        }
      } catch (e: any) {
        alert(e);
      }
    },
  });
  return (
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
  );
};

export default LoginForm;

import { useFormik } from 'formik';
import React from 'react';
import { useAppDispatch } from '../../hooks/hook';

import { Form } from './styles';

interface LoginI {
  email: string;
  password: string;
}

// interface LoginProps {
//   login: (arg1: string, arg2: any) => void;
// }

const LoginForm = ({ login }: any) => {
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

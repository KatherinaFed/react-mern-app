import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { signup } from '../../store/auth/authThunk';

interface SignupI {
  username: string;
  email: string;
  password: string;
}

const SignupPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.auth);

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    } as SignupI,
    onSubmit: (values) => {
      dispatch(signup(values.username, values.email, values.password));
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="authorization__header">Регистрация</div>
      <input
        id="username"
        type="text"
        placeholder="Username..."
        value={values.username}
        onChange={handleChange}
      />
      <input
        id="email"
        type="text"
        placeholder="Введите email..."
        value={values.email}
        onChange={handleChange}
      />
      <input
        id="password"
        type="password"
        placeholder="Введите пароль..."
        value={values.password}
        onChange={handleChange}
      />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default SignupPage;

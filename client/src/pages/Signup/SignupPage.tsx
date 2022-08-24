import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { signup } from '../../store/auth/authThunk';
import Input from '../Login/Input';

const SignupPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.auth);

  const handleClick = () => dispatch(signup(username, email, password));

  return (
    <div className="authorization">
      <div className="authorization__header">Регистрация</div>
      <Input
        value={username}
        setValue={setUsername}
        type="text"
        placeholder="Username..."
      />
      <Input
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="Введите email..."
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Введите пароль..."
      />
      <button className="authorization__btn" onClick={handleClick}>
        Зарегистрироваться
      </button>
    </div>
  );
};

export default SignupPage;

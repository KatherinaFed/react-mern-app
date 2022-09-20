import { setUserData } from './authSlice';
import { authAPI } from '../../services/api';

export const auth = () => async (dispatch: any) => {
  try {
    // debugger
    const response = await authAPI.isAuth(); // undefined
    console.log('AUTH response thunk: ', response);

    dispatch(setUserData(response.user));
    localStorage.setItem('token', response.token);
  } catch (error) {
    localStorage.removeItem('token');
  }
};

export const signup =
  (username: string, email: string, password: any) => async () => {
    try {
      const response = await authAPI.signup({
        username,
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      } else {
        console.log('no response');
      }
    } catch (e: any) {
      alert(e);
    }
  };

export const login =
  (email: string, password: any) => async (dispatch: any) => {
    try {
      const response = await authAPI.login({ email, password });

      dispatch(setUserData(response.user));
      // localStorage.setItem('token', JSON.stringify(response.token));
    } catch (e: any) {
      alert(e);
    }
  };

export const logout = () => async (dispatch: any) => {
  await authAPI.logout();
  localStorage.removeItem('token');

  dispatch(setUserData({ userId: '', email: '', username: '', isAuth: false }));
};

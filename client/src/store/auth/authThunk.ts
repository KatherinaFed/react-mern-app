import { setUserData } from './authSlice';
import { authAPI } from '../../services/api';

export const auth = () => async (dispatch: any) => {
  try {
    const response = await authAPI.isAuth();

    dispatch(setUserData(response));
    localStorage.setItem('token', response.data.token);
  } catch (error) {
    localStorage.removeItem('token');
  }
};

export const signup =
  (username: string, email: string, password: any) => async () => {
    try {
      const response = await authAPI.signup({ username, email, password });

      alert(response.data.message);
    } catch (e: any) {
      alert(e.response.data.message);
    }
  };

export const login =
  (email: string, password: any) => async (dispatch: any) => {
    try {
      const response = await authAPI.login({ email, password });
      

      dispatch(setUserData(response.user));
      localStorage.setItem('token', JSON.stringify(response.token));
    } catch (e: any) {
      alert(e);
    }
  };

export const logout = () => async (dispatch: any) => {
  await authAPI.logout();
  localStorage.removeItem('token');

  dispatch(setUserData({ userId: '', username: '', email: '', isAuth: false }));
};

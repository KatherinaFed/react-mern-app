import { setUserData } from './authSlice';
import { authAPI } from '../../services/api';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

export const auth = () => async (dispatch: any) => {
  try {
   const access = JSON.parse(localStorage.getItem('tokens') || '{}')?.accessToken;

    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}auth/me`,
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }
    );
    // console.log('AUTH access: ', JSON.parse(localStorage.getItem('tokens') || '{}')?.accessToken);
    // console.log('AUTH refresh: ', JSON.parse(localStorage.getItem('tokens') || '{}')?.refreshToken);

    if (response.status === 200) {
      dispatch(
        setUserData({
          userId: response.data.user.id,
          email: response.data.user.email,
          username: response.data.user.username,
          isAuth: true,
        })
      );
    }
  } catch (error) {
    localStorage.removeItem('tokens');
  }
};


export const signup =
  (username: string, email: string, password: any) => async () => {
    try {
      await authAPI.signup({
        username,
        email,
        password,
      });
    } catch (e: any) {
      alert(e);
    }
  };

// export const login =
//   (email: string, password: any) => async (dispatch: any) => {
//     try {
//       const response = await authAPI.login({
//         email,
//         password,
//       });

//       if (response.message === 'Logged in successfully!') {
//         dispatch(auth());
//       }
//     } catch (e: any) {
//       alert(e);
//     }
//   };

// export const logout = () => async (dispatch: any) => {
//   await authAPI.logout();
//   localStorage.removeItem('token');

//   dispatch(setUserData({ userId: '', email: '', username: '', isAuth: false }));
// };

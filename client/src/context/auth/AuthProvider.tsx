import { AuthContext, IAuthContext } from './AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  getAccessToken,
  getRefreshToken,
  updateAccessToken,
} from '../../utils/auth';
import { useEffect, useMemo, useState } from 'react';
import { authAPI } from '../../services/api';
import axios from 'axios';

export type TUserTokens = {
  accessToken: string;
  refreshToken: string;
};

interface LocationState {
  from: {
    pathname: string;
  };
}

const ACCESS_TOKEN_EXPIRES_TIME = 1000 * 60 * 9;

export const AuthProvider = ({ children }: any) => {
  const [isFirstMounted, setIsFirstMounted] = useState<boolean>(true);
  const accessToken = getAccessToken() || null;
  const refreshToken = getRefreshToken() || null;
  const navigate = useNavigate();
  const location = useLocation();

  // LOGIN
  const onLogin = (dataUserTokens: Partial<TUserTokens>) => {
    localStorage.setItem('tokens', JSON.stringify(dataUserTokens));

    // console.log(localStorage.getItem('tokens'))

    const origin = (location.state as LocationState)?.from?.pathname || '/';
    navigate(origin);
  };

  // LOGOUT
  const onLogout = async () => {
    await authAPI.logout();
    localStorage.removeItem('tokens');

    navigate('/login');
  };

  // REFRESH TOKEN
  const updateRefreshToken = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}auth/token`,
      {
        refreshToken: JSON.parse(localStorage.getItem('tokens') || '{}')
          ?.refreshToken,
      },
      { withCredentials: true }
    );

    if (response.status === 200) {
      updateAccessToken(response.data.accessToken);
    } else {
      localStorage.removeItem('tokens');
      navigate('/login');
    }

    if (isFirstMounted) {
      setIsFirstMounted(false);
    }
  };

  useEffect(() => {
    if (refreshToken) {
      // Check on the first render
      if (isFirstMounted) {
        updateRefreshToken();
      }

      // Keep checking after a certain time
      const intervalId = setInterval(() => {
        updateRefreshToken();
      }, ACCESS_TOKEN_EXPIRES_TIME);
      return () => clearInterval(intervalId);
    }
    return undefined;
  }, [accessToken]);

  const value = useMemo(
    () => ({
      token: accessToken,
      login: onLogin,
      logout: onLogout,
    }),
    [accessToken]
  ) as IAuthContext;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;

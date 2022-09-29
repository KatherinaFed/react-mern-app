import { createContext } from 'react';

export interface IAuthContext {
  token: string;
  login: (loginAccessToken?: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  token: '',
  login: () => {},
  logout: () => {},
});
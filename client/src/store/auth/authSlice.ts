import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Auth {
  userId: string;
  email: string;
  username: string;
  isAuth: boolean;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: '',
    email: '',
    username: '',
    isAuth: false,
  } as Auth,
  reducers: {
    setUserData(state, action) {
      const { userId, email, username, isAuth } = action.payload;

      return {
        ...state,
        userId,
        email,
        username,
        isAuth,
      };
    },
  },
});

export const { setUserData } = authSlice.actions;
export default authSlice.reducer;

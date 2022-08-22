import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Auth {
  userId: string;
  username: string;
  email: string;
  isAuth: boolean;
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: '',
    username: '',
    email: '',
    isAuth: false,
  } as Auth,
  reducers: {
    setUserData(state, action: PayloadAction<Auth>) {
      const { userId, username, email } = action.payload;

      return {
        ...state,
        userId,
        username,
        email,
        isAuth: true,
      };
    },
  },
});

export const { setUserData } = authSlice.actions;
export default authSlice.reducer;

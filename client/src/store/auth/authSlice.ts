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
      const { id, email, username } = action.payload;
      console.log('AUTH SLICE PAYLOAD: ', action.payload)

      return {
        ...state,
        userId: id,
        email,
        username,
        isAuth: true,
      };
    },
  },
});

export const { setUserData } = authSlice.actions;
export default authSlice.reducer;

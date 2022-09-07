import { UserI } from './../users/usersSlice';
import { createSlice } from '@reduxjs/toolkit';

interface ProfileI {
  profile: UserI,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: {},
  } as ProfileI,
  reducers: {
    setUserProfile(state, action) {
      return {
        ...state,
        profile: action.payload,
      }
    }
  }
});

export const { setUserProfile } = profileSlice.actions;
export default profileSlice.reducer;
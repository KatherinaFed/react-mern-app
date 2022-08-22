import { createSlice } from '@reduxjs/toolkit';
import { profile } from 'console';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
  },
  reducers: {
    setProfile(state, action) {
      return {
        ...state,
        profile: action.payload,
      }
    }
  }
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
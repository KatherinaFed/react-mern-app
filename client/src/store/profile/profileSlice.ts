import { UserI } from './../users/usersSlice';
import { createSlice } from '@reduxjs/toolkit';

interface ProfileI {
  profile: UserI;
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
      };
    },
    updateDataProfile(state, action) {
      return {
        ...state,
        profile: { ...state.profile, props: action.payload },
      };
    },
    savePhoto(state, action) {
      return {
        ...state,
        profile: { ...state.profile, avatar: action.payload },
      };
    },
  },
});

export const { setUserProfile, savePhoto } = profileSlice.actions;
export default profileSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

interface AppI {
  initialized: boolean;
}

const appSlice = createSlice({
  name: 'init',
  initialState: {
    initialized: false,
  } as AppI,
  reducers: {
    init(state, action) {
      return {
        ...state,
        initialized: action.payload,
      };
    },
  },
});

export const { init } = appSlice.actions;
export default appSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import eventsReducer from './events/eventSlice';
import profileReducer from './profile/profileSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    events: eventsReducer,
    profile: profileReducer,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
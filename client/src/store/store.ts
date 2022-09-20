import { configureStore } from '@reduxjs/toolkit';
import appReducer from './app/appSlice';
import authReducer from './auth/authSlice';
import eventsReducer from './events/eventSlice';
import profileReducer from './profile/profileSlice';
import usersReducer from './users/usersSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    events: eventsReducer,
    users: usersReducer,
    profile: profileReducer,
  },
});

declare global {
  interface Window {
    store: any;
  }
}

window.store = store || {};

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

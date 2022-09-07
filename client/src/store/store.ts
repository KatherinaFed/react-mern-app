import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import eventsReducer from './events/eventSlice';
import profileReducer from './profile/profileSlice';
import usersReducer from './users/usersSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    events: eventsReducer,
    users: usersReducer,
    profile: profileReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

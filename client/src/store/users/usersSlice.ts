import { createSlice } from '@reduxjs/toolkit';
import { EventI } from '../events/eventSlice';

export interface UserI {
  id: number;
  username: string;
  location: string;
  avatar: string;
  sport: string[];
  followers: object[];
  following: object[];
  events: EventI[];
  contacts: object;
}

interface DataUsersI {
  users: UserI[];
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
}

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
  } as DataUsersI,
  reducers: {
    setUsers(state, action) {
      return {
        ...state,
        users: action.payload,
      };
    },
    setTotalUsersCount(state, action) {
      return {
        ...state,
        totalUsersCount: action.payload,
      };
    },
    setCurrentPage(state, action) {
      return {
        ...state,
        currentPage: action.payload,
      };
    },
    toggleIsFetching(state, action) {
      return {
        ...state,
        isFetching: action.payload,
      };
    },
    // add follow and unfollow
  },
});

export const {
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  toggleIsFetching,
} = usersSlice.actions;
export default usersSlice.reducer;

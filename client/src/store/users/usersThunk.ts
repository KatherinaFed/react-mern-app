import { usersAPI } from '../../services/api';
import {
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
} from './usersSlice';

export const getUsersThunk =
  (page: number, pageSize: number) => async (dispatch: (arg: any) => void) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));

    const response = await usersAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.results));
    dispatch(setTotalUsersCount(response.usersCount));
  };

import { usersAPI } from '../../services/api';
import { setUserProfile } from './profileSlice';

// PROFILE
export const getProfileThunk =
  (userId: string | undefined) => async (dispatch: (arg: any) => void) => {
    const response = await usersAPI.getUserProfile(userId);
    dispatch(setUserProfile(response));
  };

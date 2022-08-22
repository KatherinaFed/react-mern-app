import { profileAPI } from '../../services/api';
import { setProfile } from './profileSlice';

// PROFILE
export const getProfileThunk =
  (userId: string | undefined) => async (dispatch: (arg: any) => void) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setProfile(response));
  };

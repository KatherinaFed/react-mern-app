import { profileAPI, usersAPI } from '../../services/api';
import { savePhoto, setUserProfile } from './profileSlice';

// PROFILE
export const getProfileThunk =
  (userId: string | undefined) => async (dispatch: (arg: any) => void) => {
    const response = await usersAPI.getUserProfile(userId);

    dispatch(setUserProfile(response));
  };

// SAVE PHOTO PROFILE
export const savePhotoThunk = (file: string | undefined) => async (dispatch: (arg: any) => void) => {
  try {
    const response = await profileAPI.savePhoto(file);

    // console.log('RESPONSE PHOTO: ', response)
    
    dispatch(savePhoto(response.data.urlPhoto))
  } catch (error) {
    console.error(error);
  }
};
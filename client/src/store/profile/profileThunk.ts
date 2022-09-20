import { ProfileContainer } from './../../pages/Profile/styles';
import { profileAPI, usersAPI } from '../../services/api';
import { savePhoto, setUserProfile } from './profileSlice';

// PROFILE
export const getProfileThunk =
  (userId: string | undefined) => async (dispatch: (arg: any) => void) => {
    const response = await usersAPI.getUserProfile(userId);

    dispatch(setUserProfile(response));
  };

// UPDATE DATA PROFILE
export const updateProfileThunk =
  (newProfileData: any) =>
  async (dispatch: (arg: any) => void, getState: () => any) => {
    try {
      // потом переделать в auth.me
      const userId = getState().profile.profile._id;

      const newData = {
        id: userId,
        data: newProfileData
      };
      
      const response = await profileAPI.updateProfileData(newData);

      dispatch(getProfileThunk(userId));
    } catch (error) {
      console.error(error);
    }
  };

// SAVE PHOTO PROFILE
export const savePhotoThunk =
  (file: string | undefined) => async (dispatch: (arg: any) => void) => {
    try {
      const response = await profileAPI.savePhoto(file);

      // console.log('RESPONSE PHOTO: ', response)

      dispatch(savePhoto(response.data.urlPhoto));
    } catch (error) {
      console.error(error);
    }
  };

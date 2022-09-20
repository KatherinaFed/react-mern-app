import { useFormik } from 'formik';
import { useRef } from 'react';
import * as Yup from 'yup';
import { useAppDispatch } from '../../../../hooks/hook';
import { updateProfileThunk } from '../../../../store/profile/profileThunk';
import EditItem from '../EditItem/EditItem';
import {
  AvatarContainer,
  Bio,
  Button,
  Container,
  FormGroup,
  HeaderText,
  Website,
} from './styles';
import userImg from '/Users/katie/mern-app/client/src/assets/avatar2.png';

const validationEditProfile = Yup.object().shape({
  username: Yup.string().required('Username is required'),
});

const EditProfile = () => {
  const dispatch = useAppDispatch();
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const { handleChange, handleSubmit } = useFormik({
    initialValues: {
      username: '',
    },
    validationSchema: validationEditProfile,
    onSubmit: (values) => {
      dispatch(updateProfileThunk(values));
    },
  });

  return (
    <Container>
      <HeaderText>Edit Profile</HeaderText>

      <AvatarContainer>
        <div className="avatar-wrapper">
          <img className="avatar" alt="profilePhoto" src={userImg} />
        </div>

        <div className="upload-file-wrapper">
          <label htmlFor="upload">
            <input id="upload" type="file" accept=".jpeg, .jpg, .png" />
            Upload New Photo
          </label>
        </div>
      </AvatarContainer>

      <FormGroup onSubmit={handleSubmit}>
        <EditItem id={'username'} name={'Username'} type={'text'}
        handleChange={handleChange} />

        {/* <Website>
          <div className="label-website">
            <label htmlFor="website">Website</label>
          </div>
          <input id="website" type="text" />
        </Website>
        <Bio>
          <div className="label-bio">
            <label htmlFor="bio">Bio</label>
          </div>
          <textarea ref={textareaRef} name="bio" id="bio" rows={5}></textarea>
        </Bio> */}

        {/* <Button>
          <button type="submit">Save</button>
        </Button> */}
      </FormGroup>
    </Container>
  );
};

export default EditProfile;

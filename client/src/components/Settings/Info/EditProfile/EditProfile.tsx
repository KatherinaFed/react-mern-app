import { useRef } from 'react';
import {
  AvatarContainer,
  Bio,
  Button,
  Container,
  FormGroup,
  HeaderText,
  Username,
  Website,
} from './styles';
import userImg from '/Users/katie/mern-app/client/src/assets/avatar2.png';

const EditProfile = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
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

      <FormGroup>
        <Username>
          <div className="label-username">
            <label htmlFor="username">Username</label>
          </div>
          <input id="username" type="text" />
        </Username>
        <Website>
          <div className="label-website">
            <label htmlFor="website">Website</label>
          </div>
          <input id="website" type="text" />
        </Website>
        <Bio>
          <div className="label-bio">
            <label htmlFor="bio">Bio</label>
          </div>
          <textarea
            ref={textareaRef}
            name="bio"
            id="bio"
            rows={5}
          ></textarea>
        </Bio>

        <Button>
          <button>Save</button>
        </Button>
      </FormGroup>
    </Container>
  );
};

export default EditProfile;

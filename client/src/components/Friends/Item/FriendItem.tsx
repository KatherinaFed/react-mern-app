import * as React from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import userImage from '/Users/katie/mern-app/client/src/assets/userImage.png';

import {
  City,
  FriendItemWrapper,
  ImageWrapper,
  InfoItemWrapper,
  ModalWrapper,
  Username,
} from './styles';
import { NavLink } from 'react-router-dom';
import { UserI } from '../../../store/users/usersSlice';

const FriendItem = ({ user }: any) => {
  return (
    <NavLink to={`/profile/${user._id}`} style={{ textDecoration: 'none' }}>
      <FriendItemWrapper>
        <ImageWrapper>
          <img src={user.avatar} alt="" className="img" />
        </ImageWrapper>
        <InfoItemWrapper>
          <Username>
            <p className="username-text">{user.username}</p>
          </Username>
          <City>
            <p className="city-text">{user.location}</p>
          </City>
        </InfoItemWrapper>
      </FriendItemWrapper>
    </NavLink>
  );
};

export default FriendItem;

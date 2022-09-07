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

const FriendItem = (props: UserI) => {
  console.log(props)
  return (
    <NavLink to={`/user/${props.id}`} style={{ textDecoration: 'none' }}>
      <FriendItemWrapper key={props.id}>
        <ImageWrapper>
          <img src={props.avatar} alt="" className="img" />
        </ImageWrapper>
        <InfoItemWrapper>
          <Username>
            <p className="username-text">{props.username}</p>
          </Username>
          <City>
            <p className="city-text">{props.location}</p>
          </City>
        </InfoItemWrapper>
      </FriendItemWrapper>
    </NavLink>
  );
};

export default FriendItem;

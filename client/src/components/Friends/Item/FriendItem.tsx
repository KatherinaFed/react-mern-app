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

type FriendItemProps = {
  id: string;
  username: string;
  followers: string;
  following: string;
  city: string;
  img: string;
};

const FriendItem = (props: FriendItemProps) => {
  return (
    <NavLink to={`/profile/${props.id}`} style={{ textDecoration: 'none' }}>
      <FriendItemWrapper key={props.id}>
        <ImageWrapper>
          <img src={props.img} alt="" className="img" />
        </ImageWrapper>
        <InfoItemWrapper>
          <Username>
            <p className="username-text">{props.username}</p>
          </Username>
          <City>
            <p className="city-text">{props.city}</p>
          </City>
        </InfoItemWrapper>
      </FriendItemWrapper>
    </NavLink>
  );
};

export default FriendItem;

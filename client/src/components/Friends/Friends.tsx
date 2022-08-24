import React from 'react';
import { NavLink } from 'react-router-dom';
import { friendList } from '../../helpers/friendList';
import FriendItem from './Item/FriendItem';
import { FriendsWrapper } from './styles';

const Friends = () => {
  return (
    <>
      <FriendsWrapper>
        {friendList.map((friend) => (
          <FriendItem {...friend} />
        ))}
      </FriendsWrapper>
    </>
  );
};

export default Friends;

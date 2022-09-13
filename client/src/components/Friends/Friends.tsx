import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { friendList } from '../../helpers/friendList';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { getUsersThunk } from '../../store/users/usersThunk';
import FriendItem from './Item/FriendItem';
import { FriendsWrapper } from './styles';

const Friends = () => {
  const { users, pageSize, totalUsersCount, currentPage } = useAppSelector(
    (state) => state.users
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsersThunk(currentPage, pageSize));
  }, [currentPage, pageSize, dispatch]);

  const onPageChanged = (currentPage: number) => {
    dispatch(getUsersThunk(currentPage, pageSize));
  };

  return (
    <>
      <FriendsWrapper>
        {users && users.map((item, i) => (
          <FriendItem user={item} key={i} />
        ))}
      </FriendsWrapper>
    </>
  );
};

export default Friends;

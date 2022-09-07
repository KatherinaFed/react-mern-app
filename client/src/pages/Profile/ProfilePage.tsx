import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { friendList } from '../../helpers/friendList';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { getProfileThunk } from '../../store/profile/profileThunk';
import InfoProfile from './InfoProfile/InfoProfile';
import SidebarProfile from './SidebarProfile.tsx/SidebarProfile';
import { ProfileContainer } from './styles';

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  // const { userId } = useAppSelector((state) => state.auth);

  let id = useParams().id;

  // if (!id) {
  //   id = userId;
  // }

  useEffect(() => {
    dispatch(getProfileThunk(id));
  }, [id, dispatch]);

  return (
    <ProfileContainer>
      <SidebarProfile />
      <InfoProfile />
    </ProfileContainer>
  );
};

export default ProfilePage;

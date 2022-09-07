import React from 'react';
import { useAppSelector } from '../../hooks/hook';
import EventItem from '../Events/Item/EventItem';

const UserEvents = () => {
  const { profile } = useAppSelector((state) => state.profile);
  console.log('Profile Events: ',profile.events)

  return (
    <div>
      {profile.events && profile.events.map((item) => (
        <EventItem {...item} />
      ))}
    </div>
  );
};

export default UserEvents;

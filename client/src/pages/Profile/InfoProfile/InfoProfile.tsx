import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Activities, InfoProfileContainer } from './styles';

type InfoProfileProps = {
  id: string;
  username: string;
  followers: string;
  following: string;
  city: string;
  img: string;
};

const InfoProfile = () => {
  const activeClass = {
    fontWeight: '500',
    textDecoration: 'none',
  };

  const inactiveClass = {
    textDecoration: 'none',
  };

  return (
    <InfoProfileContainer>
      <Activities>
        <div className="navlinks">
          <NavLink
            to="/profile/past_events"
            style={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            className="navlink"
          >
            <p className="text">Past Events {`(12)`}</p>
          </NavLink>
          <NavLink
            to="/profile/upcoming_events"
            style={({ isActive }) => (isActive ? activeClass : inactiveClass)}
            className="navlink"
          >
            <p className="text">Upcoming Events {`(5)`}</p>
          </NavLink>
        </div>
      </Activities>
      <Outlet />
    </InfoProfileContainer>
  );
};

export default InfoProfile;

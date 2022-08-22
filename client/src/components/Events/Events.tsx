import React from 'react';
import { NavLink } from 'react-router-dom';
import { EventsWrapper } from './styles';

const Events: React.FC = () => {
  const activeClass = {
    fontWeight: 'bold',
  };

  const inactiveClass = {
    textDecoration: 'none',
  };

  return (
    <EventsWrapper>
      <div className="navlinks">
        <NavLink
          to="/events/all-events"
          style={({ isActive }) => (isActive ? activeClass : inactiveClass)}
          className="navlink"
        >
          <p className="text">All events</p>
        </NavLink>
        <NavLink
          to="/events/my-events"
          style={({ isActive }) => (isActive ? activeClass : inactiveClass)}
          className="navlink"
        >
          <p className="text">My events</p>
        </NavLink>
      </div>
    </EventsWrapper>
  );
};

export default Events;

import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { ActivityFilter, LocationFilter } from '../../../components/Filter/Filters';
import { palette } from '../../../palette';
import { FilterContainer, LayoutWrapper, Links, LinksWrapper } from './styles';

const LayoutRouting: React.FC = () => {
  const activeTab = {
    fontWeight: 'bold',
  };

  const inactiveTab = {
    textDecoration: 'none',
  };

  const activeButton = {
    color: 'white',
    backgroundColor: palette.gray,
  };

  const inactiveButton = {
    color: 'black',
    backgroundColor: 'white',
  };

  const location = useLocation().pathname;
  const isFriends = location === '/friends';
  const isUsers = location === '/users';

  return (
    <>
      <LayoutWrapper>
        <div className="navlinks">
          <NavLink
            to="/events"
            style={({ isActive }) => {
              return isActive ? activeButton : inactiveButton;
            }}
            className="navlink"
          >
            <p className="text">Events</p>
          </NavLink>
          <NavLink
            to="/friends"
            style={({ isActive }) => (isActive ? activeButton : inactiveButton)}
            className="navlink"
          >
            <p className="text">Friends</p>
          </NavLink>
          <NavLink
            to="/users"
            style={({ isActive }) => (isActive ? activeButton : inactiveButton)}
            className="navlink"
          >
            <p className="text">Users</p>
          </NavLink>
        </div>
      </LayoutWrapper>

      {!isFriends && !isUsers ? (
        <LinksWrapper>
          <div className="filter-layout">
            <Links>
              <NavLink
                to="/events/all-events"
                style={({ isActive }) => (isActive ? activeTab : inactiveTab)}
                className="navlink"
              >
                <p className="text">All events</p>
              </NavLink>
              <NavLink
                to="/events/my-events"
                style={({ isActive }) => (isActive ? activeTab : inactiveTab)}
                className="navlink"
              >
                <p className="text">My events</p>
              </NavLink>
            </Links>
            <FilterContainer>
              <LocationFilter />
              <ActivityFilter />
            </FilterContainer>
          </div>
        </LinksWrapper>
      ) : null}
    </>
  );
};

export default LayoutRouting;

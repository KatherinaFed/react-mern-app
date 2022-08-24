import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { palette } from '../../../../palette';
import { Item } from './styles';

type SidebarItemT = {
  id: string;
  name: string;
  link: string;
  icon: JSX.Element;
};

const SidebarItem = ({ id, name, link, icon }: SidebarItemT) => {
  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'black',
  };

  const inactiveStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <>
      <Item key={id} isActive={isActive}>
        <NavLink
          to={link}
          style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          <div className="container-link">
            <span>{icon}</span>
            <p>{name}</p>
          </div>
        </NavLink>
      </Item>
    </>
  );
};

export default SidebarItem;

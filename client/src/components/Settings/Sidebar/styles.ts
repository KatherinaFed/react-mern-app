import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from '../../../palette';

export const SidebarWrapper = styled.div`
  grid-column: 1;
  height: 100vh;
`;

export const SidebarContainer = styled.div`
  display: grid;
  padding: 5px;
  border: 1px solid ${palette.orange};
  border-radius: 0.5rem;
`;

export const SidebarItems = styled.div`
  display: grid;
`;

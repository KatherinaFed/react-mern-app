import styled from 'styled-components';
import { palette } from '../../../../palette';

export const FavoriteContainer = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const HeaderTextFavorite = styled.div`
  padding: 10px;

  border-bottom: 1px solid ${palette.lighgray};
  font-weight: 400;
  font-size: 30px;
  margin-right: 30px;
`;

export const SportsContainer = styled.div`
  display: grid;
  margin-left: -40px;
  margin-right: 30px;

  ul {
    list-style: none;
  }
`;

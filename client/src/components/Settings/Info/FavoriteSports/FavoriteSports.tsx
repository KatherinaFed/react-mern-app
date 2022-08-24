import React from 'react';
import SportItem from './SportItem/SportItem';
import { sportList } from '../../../../helpers/sportList';
import {
  FavoriteContainer,
  HeaderTextFavorite,
  SportsContainer,
} from './styles';

const FavoriteSports = () => {
  return (
    <FavoriteContainer>
      <HeaderTextFavorite>Favorite Sports</HeaderTextFavorite>

      <SportsContainer>
        <ul>
          {sportList.map(({ value, name, icon }) => (
            <SportItem value={value} sportname={name} icon={icon} />
          ))}
        </ul>
      </SportsContainer>
    </FavoriteContainer>
  );
};

export default FavoriteSports;

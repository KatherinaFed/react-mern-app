import React from 'react';
import {
  HeaderWrapper,
  InfoWrapper,
  SearchInput,
  SearchWrapper,
  StyledLink,
  Text,
  TextWrapper,
  Username,
} from './styles';
import { Avatar } from '@mui/material';
import { Svg } from './svg';

const Header = () => {
  return (
    <HeaderWrapper>
      <TextWrapper>
        <Text>
          <StyledLink to="/">{'Friends & Events'}</StyledLink>
        </Text>
      </TextWrapper>
      <SearchWrapper>
        <Svg />
        <SearchInput />
      </SearchWrapper>
      <InfoWrapper>
        <Avatar sx={{ p: '10px', mr: '10px' }} />
        <StyledLink to="/profile">
          <Username>Username</Username>
        </StyledLink>
      </InfoWrapper>
    </HeaderWrapper>
  );
};

export default Header;

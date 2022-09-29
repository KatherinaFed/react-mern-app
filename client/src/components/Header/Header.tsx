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
import { useAppSelector } from '../../hooks/hook';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { isAuth, username } = useAppSelector((state) => state.auth);
  const { token } = useAuth();
  // console.log('HEADER token: ', token)
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
      {token ? (
        <InfoWrapper>
          <Avatar sx={{ p: '10px', mr: '10px' }} />
          <StyledLink to="/profile">
            <Username>{username}</Username>
          </StyledLink>
        </InfoWrapper>
      ) : (
        <InfoWrapper>
          {/* <Avatar sx={{ p: '10px', mr: '10px' }} /> */}
          <StyledLink to="/login">
            <Username>Login</Username>
          </StyledLink>
        </InfoWrapper>
      )}
    </HeaderWrapper>
  );
};

export default Header;

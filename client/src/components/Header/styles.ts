import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from '../../palette';

export const HeaderWrapper = styled.header`
  background-color: ${palette.gray};
  position: static;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid white;
  border-color: #ed6c02;
  border-radius: 0.5rem;
  margin: 0.5rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

export const Text = styled.h2`
  font-weight: 300;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const SearchWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const SearchInput = styled.input`
  height: 40px;
  weight: 50px;
  font-size: 20px;
  font-weight: 300;
  width: 100%;
  border: 2px solid white;
  border-radius: 50px;
  margin: 8px 0;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  padding-left: 50px;

  :focus {
    border-color: #ed6c02;
    box-shadow: 0 0 8px 0 #ed6c02;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  align-items: center;
`;

export const Avatar = styled.img`
  margin: 0 auto;
  padding-right: 10px;
  background-position: center;
  // background-color: white;
  height: 50px;
  weight: 50px;
  border: 3px solid white,
  border-radius: 50%;
  padding-right: 10px;
`;

export const Username = styled.h3`
  color: white;
  font-weight: 300;
`;

import styled from 'styled-components';
import { palette } from '../../palette';

export const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 300px auto auto 200px;
  flex-direction: column;
  margin: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px 3px rgb(209 213 219);

  .avatar-wrapper {
    grid-column: 1;
    margin: auto;
    padding: 10px;
  }
  .avatar {
    width: 150px;
    height: 150px;

    border-radius: 50%;
    border: 3px solid white;
    background-color: white;
  }

  .name-wrapper {
    grid-column: 2;
    margin: 10px;
    padding: 5px;
  }

  .name {
    font-weight: 400;
    margin-top: 50px;
  }

  .isOnline {
  }

  .info-wrapper-one {
    grid-column: 3;
    margin: 10px;
    padding: 10px;
    position: relative;
  }

  .info-wrapper-two {
    grid-column: 4;
    margin: 10px;
    padding: 10px;
  }

  .info-item {
    align-items: center;
    font-size: 18px;
    font-weight: 400;
    padding-top: 10px;
  }

  .button-wrapper {
    grid-column: 5;
    display: flex;
    margin: 10px;
    padding: 10px;
    justify-content: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  color: white;
  background-color: ${palette.orange};
  font-size: 20px;
  font-weight: 400;
  border: 1px solid grey;
  border-radius: 50px;
  // box-shadow: 0px 0px 10px 3px rgb(209 213 219);
  cursor: pointer;

  :hover {
    background-color: ${palette.darkOrange};
    box-shadow: 0px 0px 10px 3px rgb(209 213 219);
  }
`;

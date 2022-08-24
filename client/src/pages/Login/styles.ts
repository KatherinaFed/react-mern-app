import styled from 'styled-components';
import { palette } from '../../palette';

export const LoginWrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(2, 50%);
  flex-direction: column;
  margin: 0.5rem;
  background-color: white;
  gap: 0.5rem;
`;

export const LeftSide = styled.div`
  background-color: #424242;
  grid-column: 1;
`;

export const LeftSideContainer = styled.div`
  display: grid;
  grid-template-rows: 100px auto 3rem;

  .app-name {
    grid-row: 1;
    margin: 10px;
    font-size: 28px;
    font-weight: 500;
    color: ${palette.orange};
    text-align: center;
    align-self: center;
  }

  .form-container {
    display: grid;
    grid-row: 2;
    gap: 1.5rem;
  }

  .header-text {
    font-size: 24px;
    font-weight: 400;
    color: white;
    text-align: center;
  }

  .signup {
    grid-row: 3;
    text-align: center;
    align-self: center;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 1rem;
  margin: 10px auto;
  width: 300px;

  input {
    min-height: 2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    background: white;
    border: none;
    border-radius: 0.5rem;
    // width: 100%;
    font-size: 16px;
    font-weight: 400;
    border: 1px solid white;
    outline: none;

    :focus {
      border-color: ${palette.orange};
      box-shadow: 0 0 10px 0 #ed6c02;
    }
  }

  button {
    height: 2rem;
    border-radius: 0.5rem;
    background-color: ${palette.orange};
    border: none;
    font-size: 16px;
    font-weight: 400;
    // box-shadow: 0 0 8px 0 white;
  }
`;

export const RightSide = styled.div`
  grid-column: 2;
  background-color: beige;
`;

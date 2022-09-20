import styled from 'styled-components';
import { palette } from '../../palette';

export const SignupWrapper = styled.div`
  display: grid;
  height: 100vh;
  // grid-template-columns: repeat(2, 50%);
  flex-direction: column;
  margin: 0.5rem;
  background-color: white;
  gap: 0.5rem;
`;

export const LeftSideSignup = styled.div`
  background-color: #424242;
  // grid-column: 1;
`;

export const LeftSideContainerSignup = styled.div`
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
`;

export const FormSignup = styled.form`
  display: grid;
  gap: 0.5rem;
  margin: 10px auto;

  label {
    color: white;
    font-weight: 300;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 380px;
    margin-bottom: 10px;
  }

  input {
    flex: 0 0 200px;
    min-height: 2rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    background: white;
    border-radius: 0.5rem;
    font-size: 14px;
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

export const RightSideSignup = styled.div`
  grid-column: 2;
  background-color: beige;
`;

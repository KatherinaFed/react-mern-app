import styled from 'styled-components';
import { palette } from '../../../../palette';

export const Container = styled.div`
  display: grid;
  gap: 3rem;
`;

export const HeaderText = styled.div`
  padding: 10px;

  border-bottom: 1px solid ${palette.lighgray};
  font-weight: 400;
  font-size: 30px;
`;

export const FormGroup = styled.form`
  display: grid;
  gap: 1.5rem;
`;

export const Email = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 0.5rem;

  .label-container {
    grid-row: 1;
    margin: 10px 10px 10px 0;
    font-size: 18px;
    font-weight: 500;
  }

  .input-container {
    grid-row: 2;
    display: flex;
    gap: 0.5rem;
  }

  input {
    width: 100%;
    font-size: 18px;
    font-weight: 300;
    padding: 10px;

    border: 1px solid gray;
    background-color: white;
    border-radius: 0.5rem;
    :focus {
      outline: none !important;
      border: 1px solid ${palette.orange};
      box-shadow: 0 0 10px ${palette.lighgray};
    }
  }

  .button-container {
    display: flex;

    button {
      border: 1px solid ${palette.gray};
      width: 80px;
      color: white;
      border-radius: 0.5rem;
      display: inline-block;
      padding: 6px 12px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      background-color: ${palette.orange};
    }
  }
`;

export const Password = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 0.5rem;

  .label-container {
    grid-row: 1;
    margin: 10px 10px 10px 0;
    font-size: 18px;
    font-weight: 500;
  }

  .input-container {
    grid-row: 2;
    display: flex;
    gap: 0.5rem;
  }

  input {
    width: 100%;
    font-size: 18px;
    font-weight: 300;
    padding: 10px;

    border: 1px solid gray;
    background-color: white;
    border-radius: 0.5rem;
    :focus {
      outline: none !important;
      border: 1px solid ${palette.orange};
      box-shadow: 0 0 10px ${palette.lighgray};
    }
  }

  .button-container {
    display: flex;

    button {
      border: 1px solid ${palette.gray};
      width: 80px;
      color: white;
      border-radius: 0.5rem;
      display: inline-block;
      padding: 6px 12px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      background-color: ${palette.orange};
    }
  }
`;

export const DeleteAccount = styled.div`
  display: grid;
  gap: 1.5rem;

  .text-container {
    font-weight: 500;
    font-size: 24px;
  }

  .button-container {
    display: flex;

    button {
      border: 1px solid red;
      width: 150px;
      color: red;
      border-radius: 0.5rem;
      display: inline-block;
      padding: 6px 12px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      background-color: white;
    }
  }
`;

import styled from 'styled-components';
import { palette } from '../../../../palette';

export const EditItemContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 0.5rem;

  .name-container {
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

  .edit-button {
    display: flex;

    button {
      border: 1px solid ${palette.orange};
      border-radius: 0.5rem;
      background-color: white;
      display: inline-block;
      padding: 10px;
      font-size: 18px;
      cursor: pointer;
      width: 80px;

      :hover {
        outline: none !important;
        background-color: ${palette.lightorange};
        border: 1px solid ${palette.orange};
        box-shadow: 0 0 10px ${palette.lighgray};
      }
    }
  }
`;

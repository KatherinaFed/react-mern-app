import styled from 'styled-components';
import { palette } from '../../../../../palette';

export const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 50px auto 50px;
  flex-direction: column;
  cursor: pointer;
  border-bottom: 1px solid ${palette.lighgray};

  .icon-container {
    padding: 10px;
  }

  .sports-name {
    padding: 10px;
    font-size: 18px;
    font-weight: 400;
    align-self: center;
  }

  .checkbox {
    display: flex;
    padding: 10px;
  }

  input {
    display: none;

    :checked ~ span {
      color: ${palette.orange};
      display: flex;
    }
  }

  span {
    display: none;
    width: 24px;
    height: 24px;
    font-size: 24px;
  }
`;

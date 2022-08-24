import styled from 'styled-components';
import { palette } from '../../../../../palette';


export const Item = styled.form`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 1.5rem;

  p {
    padding: 10px;
    align-self: center;
    font-size: 18px;
  }
`;

export const IconsContainer = styled.div`
  align-items: end;
  display: inline-flex;
  flex-direction: row;
  justify-content: start;
  width: unset;
  gap: 0.75rem;

  label {
    display: flex;
    cursor: pointer;
  }

  input {
    height: 0px;
    overflow: hidden;
    position: absolute;
    width: 0px;
    margin: 0px
    display: none;

    :checked ~ span {
      color: ${palette.orange};
      background-color: rgba(237, 108, 2, 0.1);
    }
  }

  span {
    display: flex;
    padding: 10px;
    border-radius: 0.5rem;
  }
`;
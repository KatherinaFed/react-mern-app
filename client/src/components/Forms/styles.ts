import styled from 'styled-components';
import { palette } from '../../palette';

export const ModalFormContainer = styled.form`
  display: grid;
  grid-template-rows: repeat(7, auto);
  flex-direction: rows;
  margin: 0.5rem;
  gap: 0.5rem;

  .text {
    padding: 10px;
    font-size: 20px;
    font-weight: 500;
  }

  .filter-activity {
    z-index: 2;
  }
`;

export const InputActivity = styled.div`
  grid-row: 1;

  display: grid;
  grid-template-columns: repeat(2, 50%);
  flex-direction: columns;
`;

export const InputTitle = styled.div`
  grid-row: 2;

  display: grid;
  grid-template-columns: repeat(2, 50%);
  flex-direction: columns;

  input {
    padding: 0 10px;
    font-size: 16px;
    font-weight: 400;

    :focus::placeholder {
      color: transparent;
    }
  }
`;

export const TextAreaDescription = styled.div`
  grid-row: 3;

  display: grid;
  grid-template-columns: repeat(2, 50%);
  flex-direction: columns;

  textarea {
    padding: 10px;
    font-size: 16px;
    font-weight: 400;

    :focus::placeholder {
      color: transparent;
    }
  }
`;

export const InputDate = styled.div`
  grid-row: 4;

  display: grid;
  grid-template-columns: repeat(2, 50%);
  flex-direction: columns;
`;

export const InputTime = styled.div`
  grid-row: 5;

  display: grid;
  grid-template-columns: repeat(2, 50%);
  flex-direction: columns;
`;

export const InputLocation = styled.div`
  grid-row: 6;

  display: grid;
  grid-template-columns: repeat(2, 50%);
  flex-direction: columns;
`;

export const InputImage = styled.div`
  grid-row: 7;

  display: grid;
  grid-template-columns: repeat(2, 50%);
  flex-direction: columns;

  .image-wrapper {
    display: flex;
  }
`;

export const Footer = styled.div`
  padding: 10px 0px;
  text-align: right;
`;

export const ButtonModalCancel = styled.button`
  background-color: ${palette.lightGray};
  color: white;
  font-size: 1em;
  margin: 10px;
  padding: 5px 10px;
  border: 1px solid ${palette.gray};
  border-radius: 0.5rem;
  cursor: pointer;

  :hover {
    background-color: ${palette.gray};
  }
`;

export const ButtonModalSave = styled.button`
  background-color: ${palette.orange};
  color: white;
  font-size: 1em;
  margin: 10px;
  padding: 5px 10px;
  border: 1px solid ${palette.darkOrange};
  border-radius: 0.5rem;
  cursor: pointer;

  :hover {
    background-color: ${palette.darkOrange};
  }
`;

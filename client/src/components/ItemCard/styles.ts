import styled from 'styled-components';
import { palette } from '../../palette';

type ItemP = {
  isNew: boolean;
};

export const ItemCardContainer = styled.div`
  display: grid;
  grid-template-columns: 200px auto 200px;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 10px;
  border-radius: 0.5rem;
  border: 1px solid ${palette.gray};
  background-color: white;

  :hover {
    border: 1px solid ${palette.orange};
    box-shadow: 0px 0px 10px 3px ${palette.lightorange};
    cursor: pointer;
  }
  // rgb(209 213 219)

  .info-item {
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    padding-top: 5px;
  }

  p {
    font-size: 16px;
    font-weight: 300;
    // padding-top: 5px;
  }
`;

export const Image = styled.div`
  img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
    padding: 10px;
  }
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  flex-direction: column;
  padding: 10px;
`;

export const FirstColumn = styled.div`
  padding: 0 10px;
`;

export const SecondColumn = styled.div`
  padding: 0 10px;
`;

export const Status = styled.div`
  margin: 0 auto;
  align-self: center;

  background-color: ${palette.lightorange};
  padding: 10px;
  border-radius: 50%;

  .info-status-item {
    width: 100px;
    height: 100px;
  }

  .status-text {
    text-align: center;
    line-height: 100px;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const ButtonWrapper = styled.div`
  grid-column: 4;
  display: flex;
  margin: 10px;
  padding: 10px;
  justify-content: center;
  align-items: center;
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
  box-shadow: 0px 0px 10px 3px rgb(209 213 219);
`;

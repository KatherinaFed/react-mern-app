import styled from 'styled-components';
import { palette } from '../../../palette';

export const EventItemWrapper = styled.div`
  margin: 1rem;
`;

export const ImageWrapper = styled.div`
  grid-column: 1;
  margin: auto;

  .img {
    object-fit: cover;
    height: 250px;
  }
`;

// export const Image = styled.img`
//   object-fit: cover;
//   height: 250px;
// `;

export const InfoWrapperOne = styled.div`
  display: grid;
  grid-template-rows: 5rem 4rem 4rem 4rem;
  grid-column: 2;
  margin: 10px;
  position: relative;
`;

export const InfoWrapperTwo = styled.div`
  display: grid;
  grid-template-rows: 5rem 4rem 4rem 4rem;
  grid-column: 3;
  margin: 10px;
  position: relative;
`;

export const InfoItem = styled.div`
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  padding: 10px;

  .info-data {
    font-size: 18px;
    font-weight: 300;
    padding-top: 5px;
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

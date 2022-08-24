import styled from 'styled-components';
import { palette } from '../../../palette';

export const FriendItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 150px;
  flex-direction: column;
  margin: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px 3px ${palette.gray};
  background-color: #656565;
`;

 //rgb(209 213 219) #656565 #4F4F4F

export const ImageWrapper = styled.div`
  grid-column: 1;
  margin: 10px;
  display: block;

  .img {
    width: 120px;
    height: 120px;

    border-radius: 50%;
    border: 3px solid white;
    background-color: white;
  }
`;

export const InfoItemWrapper = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-rows: 2rem 3rem auto;
  grid-column: 2;
  margin: 5px;
  position: relative;
  color: white;
`;

export const ModalWrapper = styled.div`
position: absolute;
  top: 2px;
  right: 5px;
  
`;

export const Username = styled.div`
  grid-row: 2;
  font-size: 24px;
  font-weight: 500;
  padding: 10px;
  align-self: self-end;
`;

export const City = styled.div`
  grid-row: 3;
  font-size: 20px;
  font-weight: 300;
  padding: 10px;
`;

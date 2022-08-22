import styled from 'styled-components';
import { palette } from '../../../palette';

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 20% auto;
  flex-direction: column;

  .avatar {
    padding: 10px;
  }

  img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
    border-radius: 50%;
  }

  .info {
    padding: 10px;
  }

  .info-item {
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    padding: 5px 0;
  }

  p {
    font-size: 16px;
    font-weight: 300;
  }
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  flex-direction: column;
  // margin: 0.5rem;
  gap: 0.5rem;

  .info-item {
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    padding: 5px 0;
  }

  p {
    font-size: 20px;
    font-weight: 300;
  }
`;

export const Image = styled.div`
  img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
`;

export const LeftContainer = styled.div`
  padding: 10px;
`;

export const RightContainer = styled.div`
  padding: 10px;
`;

export const FooterForm = styled.footer`
  padding: 10px 0px;
  text-align: right;
`;

export const ButtonModalJoin = styled.button`
  background-color: ${palette.orange};
  color: white;
  font-size: 1.2em;
  margin: 10px;
  padding: 5px 10px;
  border: 1px solid ${palette.darkOrange};
  border-radius: 0.5rem;
  cursor: pointer;

  :hover {
    background-color: ${palette.darkOrange};
  }
`;

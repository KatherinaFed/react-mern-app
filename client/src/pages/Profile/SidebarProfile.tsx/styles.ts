import styled from 'styled-components';
import { palette } from '../../../palette';

export const SidebarProfileContainer = styled.div`
  grid-column: 1;

 

  .wrapper {
    display: grid;
    height: 100vh;
    padding: 1.5rem;
    grid-template-rows: auto auto 1fr auto;
    border: 1px solid ${palette.orange};
    border-radius: 0.5rem;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;

  .avatar-wrapper {
    margin: 10px;
    padding: 10px 0;
  }
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .name-wrapper {
    text-align: center;
    align-self: center;
  }

  p {
    font-size: 24px;
    font-weight: 400;
    padding-left: 10px;
  }
`;

export const FollowersInfo = styled.div`
  display: flex;
  justify-content: start;

  .followers-wrapper {
    display: grid;
    grid-template-columns: auto auto;
    flex-direction: column;
    margin: 0.5rem;
    padding: 10px;
    gap: 1rem;
  }
`;

export const Followers = styled.div`
  grid-column: 1;

  .count {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .text {
    font-size: 16px;
    font-weight: 400;
  }
`;

export const Following = styled.div`
  grid-column: 2;

  .count {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .text {
    font-size: 16px;
    font-weight: 400;
  }
`;

export const LinksInfo = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const Item = styled.div`
  padding: 15px 10px;
  position: relative;
  cursor: pointer;
  border-top: 1px solid ${palette.lighgray};
  border-bottom: 1px solid ${palette.lighgray};
  :hover {
    background-color: #cccccc;
    border-radius: 0.5rem;
  }

  .container-link {
    display: flex;
  }

  p {
    align-self: center;
    padding-left: 10px;
    font-size: 18px;
  }
`;

export const FooterInfo = styled.footer`
  display: grid;
  padding: 5px;
  background-color: #f2f2f2;
  border-radius: 0.5rem;
`;

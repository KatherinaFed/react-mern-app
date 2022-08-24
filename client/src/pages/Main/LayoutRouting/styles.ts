import styled from 'styled-components';
import { palette } from '../../../palette';

export const LayoutWrapper = styled.div`
  .navlinks {
    margin: 1rem;
    display: flex;
  }

  .navlink {
    width: 150px;
    height: 50px;
    font-size: 20px;
    font-weight: 400;
    border: 1px solid grey;
    border-radius: 50px;
    margin-right: 10px;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    box-shadow: 0px 0px 10px 3px rgb(209 213 219);
  }

  .text {
    padding: 12px;
  }
`;

export const LinksWrapper = styled.div`
  margin: 1rem;

  .filter-layout {
    display: flex;
    margin-left: auto;
    justify-content: space-between;
  }
`;

export const Links = styled.div`
  display: flex;

  .navlink {
    font-size: 22px;
    font-weight: 300;
    color: black;
    padding: 60px 10px 0;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  margin: 1rem;
  justify-content: flex-end;
  gap: 0.5rem;
  
  .filter-wrapper {
    margin-right: 10px;
    min-width: 200px;
  }

  .filter-name {
    font-size: 18px;
    font-weight: 400;
    margin: 5px 0;
  }
`;

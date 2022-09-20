import styled from 'styled-components';
import { palette } from '../../../../palette';

type ItemProps = {
  isActive: boolean;
};

export const Item = styled.div<ItemProps>`
  padding: 10px;
  position: relative;
  // border-bottom: 1px solid ${palette.gray};

  ${({ isActive }) =>
    isActive
      ? {
          'background-color': '#FFC495',
          'border-radius': '0.5rem',
        }
      : null}

  :hover {
    background-color: ${palette.lighgray};
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

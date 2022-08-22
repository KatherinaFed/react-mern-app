import styled from 'styled-components';

export const StyledSvg = styled.div`
  svg {
    height: 25px;
    position: absolute;
    left: 0;
    top: 10px;
    padding: 5px;
    fill: black;
    transition: 0.3s;
  }

  input:focus + svg {
    fill: #ed6c02;
  }

  &.inputWithIcon {
    position: relative;
  }
`;
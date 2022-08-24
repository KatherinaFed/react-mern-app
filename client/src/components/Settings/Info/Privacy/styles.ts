import styled from 'styled-components';
import { palette } from '../../../../palette';

export const PrivacyContainer = styled.div`
  display: grid;
  gap: 1.5rem;
`;

export const PrivacyHeader = styled.div`
  padding: 10px;

  border-bottom: 1px solid ${palette.lighgray};
  font-weight: 400;
  font-size: 30px;
`;

export const PrivacyText = styled.div`
  display: grid;
  gap: 0.75rem;

  .privacy-text-container {
    font-weight: 500;
    font-size: 24px;
  }
`;

export const PrivacyInputs = styled.div`
  display: grid;
  gap: 0.75rem;
  // border-radius: 0.5rem;
  // border: 1px solid ${palette.lighgray};
  // box-shadow: 0 0 10px ${palette.lighgray};
`;

export const Public = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  flex-direction: column;
  cursor: pointer;
  border-radius: 0.5rem;
  border: 1px solid ${palette.lighgray};
  box-shadow: 0 0 10px ${palette.lighgray};

  .public-input-container {
    padding: 10px;
    margin: 10px;
    align-self: center;
  }

  .public-description-container {
    display: grid;
    grid-template-rows: auto auto;
    flex-direction: column;
    gap: 0.25rem;
    padding: 10px;
  }

  .header-text {
    padding: 5px;
    font-size: 18px;
    font-weight: 500;
  }

  .description-text {
    padding: 5px;
  }

  .text {
    line-height: 1.5;
    font-size: 18px;
    color: ${palette.text};
  }
`;

export const Private = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  flex-direction: column;
  cursor: pointer;
  border-radius: 0.5rem;
  border: 1px solid ${palette.lighgray};
  box-shadow: 0 0 10px ${palette.lighgray};

  .private-input-container {
    padding: 10px;
    margin: 10px;
    align-self: center;
  }

  .private-description-container {
    display: grid;
    grid-template-rows: auto auto;
    flex-direction: column;
    gap: 0.25rem;
    padding: 10px;
  }

  .header-text {
    padding: 5px;
    font-size: 18px;
    font-weight: 500;
  }

  .description-text {
    padding: 5px;
  }

  .text {
    line-height: 1.5;
    font-size: 18px;
    color: ${palette.text};
  }
`;

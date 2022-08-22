import styled from 'styled-components';
import { palette } from '../../../../palette';

export const NotificationConatiner = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-right: 48px;
`;

export const NotificationHeader = styled.div`
  padding: 10px;

  border-bottom: 1px solid ${palette.lighgray};
  font-weight: 400;
  font-size: 30px;
`;

export const FormsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

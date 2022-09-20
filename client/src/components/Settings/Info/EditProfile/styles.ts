import styled from 'styled-components';
import { palette } from '../../../../palette';

export const Container = styled.div``;

export const HeaderText = styled.div`
  padding: 10px;

  position: relative;
  border-bottom: 1px solid ${palette.lighgray};
  font-weight: 400;
  font-size: 30px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  padding: 10px 0;

  .avatar-wrapper {
    padding: 10px 0;
  }
  .avatar {
    width: 100px;
    height: 100px;

    border-radius: 50%;
  }

  .upload-file-wrapper {
    padding: 10px;
    margin-left: 10px;
    align-self: center;
    display: flex;
    textalign: center;
  }

  label {
    border: 1px solid ${palette.orange};
    border-radius: 0.5rem;
    display: inline-block;
    padding: 6px 12px;
    font-size: 16px;
    cursor: pointer;

    :hover {
      outline: none !important;
      background-color: ${palette.lightorange};
      border: 1px solid ${palette.orange};
      box-shadow: 0 0 10px ${palette.lighgray};
    }
  }

  input {
    display: none;
  }
`;

export const FormGroup = styled.form`
  display: grid;
  gap: 1.5rem;
`;

export const Website = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  flex-direction: column;
  gap: 0.5rem;

  .label-website {
    grid-row: 1;
    margin: 10px 10px 10px 0;
    font-size: 18px;
    font-weight: 500;
  }

  input {
    grid-row: 2;
    font-size: 18px;
    font-weight: 300;
    padding: 10px;

    border: 1px solid gray;
    background-color: white;
    border-radius: 0.5rem;
    :focus {
      outline: none !important;
      border: 1px solid ${palette.orange};
      box-shadow: 0 0 10px ${palette.lighgray};
    }
  }
`;

export const Bio = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  flex-direction: column;
  gap: 0.5rem;

  .label-bio {
    grid-row: 1;
    margin: 10px 10px 10px 0;
    font-size: 18px;
    font-weight: 500;
  }

  textarea {
    grid-row: 2;
    font-size: 18px;
    font-weight: 300;
    padding: 10px;
    resize: vertical;
    min-height: 48px;
    max-height: 300px;

    border: 1px solid gray;
    background-color: white;
    border-radius: 0.5rem;
    :focus {
      outline: none !important;
      border: 1px solid ${palette.orange};
      box-shadow: 0 0 10px ${palette.lighgray};
    }
  }
`;

export const Button = styled.div`
  display: flex;

  button {
    border: 1px solid ${palette.gray};
    width: 80px;
    color: white;
    border-radius: 0.5rem;
    display: inline-block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    background-color: ${palette.orange};
  }
`;

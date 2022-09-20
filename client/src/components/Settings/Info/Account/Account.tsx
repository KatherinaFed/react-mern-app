import React from 'react';
import EditItem from '../EditItem/EditItem';
import {
  Container,
  DeleteAccount,
  Email,
  FormGroup,
  HeaderText,
  Password,
} from './styles';

const Account = () => {
  return (
    <Container>
      <HeaderText>Account</HeaderText>
      <FormGroup>
        {/* <EditItem id={'email'} name={'Email'} type={'text'} />
        <EditItem id={'password'} name={'Password'} type={'password'} /> */}
      </FormGroup>

      <DeleteAccount>
        <div className="text-container">Delete Account</div>
        <p>
          Permanently delete your account from Friends & Events. This cannot be
          undone. Your data can never be retrieved once deleted.
        </p>
        <div className="button-container">
          <button type="submit">Delete Account</button>
        </div>
      </DeleteAccount>
    </Container>
  );
};

export default Account;

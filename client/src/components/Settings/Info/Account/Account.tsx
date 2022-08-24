import React from 'react';
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
        <Email>
          <div className="label-container">
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-container">
            <input id="email" type="text" />

            <div className="button-container">
              <button type="submit">Edit</button>
            </div>
          </div>
        </Email>

        <Password>
          <div className="label-container">
            <label htmlFor="password">Password</label>
          </div>

          <div className="input-container">
            <input id="password" type="password" />

            <div className="button-container">
              <button type="submit">Edit</button>
            </div>
          </div>
        </Password>
      </FormGroup>

      <DeleteAccount>
        <div className="text-container">Delete Account</div>
        <p>
          Permanently delete your account from Friends & Events. This cannot be undone.
          Your data can never be retrieved once deleted.
        </p>
        <div className="button-container">
          <button type='submit'>Delete Account</button>
        </div>
      </DeleteAccount>
    </Container>
  );
};

export default Account;

import React from 'react';
import {
  ButtonModalJoin,
  FooterForm,
  FormContainer,
  HeaderContainer,
  Image,
  LeftContainer,
  RightContainer,
} from './styles';
import imageHike from '../../../assets/hikeImg.jpg';
import avatar from '../../../assets/avatar.png';

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="info">
        <div className='info-item'>
          Event: <p>{'Swimming'}</p>
        </div>
        <div className='info-item'>
          Creator: <p>{'John'}</p>
        </div>
      </div>
    </HeaderContainer>
  );
};

export const Form = () => {
  return (
    <>
      <FormContainer>
        <LeftContainer>
          <Image>
            <img src={imageHike} alt="" />
          </Image>
          <div className="info-item">
            Location: <p>{'Berlin'}</p>
          </div>
          <div className="info-item">
            Date: <p>{'25.08.2022'}</p>
          </div>
          <div className="info-item">
            Time: <p>{'09:00'}</p>
          </div>
        </LeftContainer>
        <RightContainer>
          <div className="info-item">
            Title: <p>{'Hi, guys! Who wants to go with me'}</p>
          </div>
          <div className="info-item">
            Description: <p>{`Don't forget to get cash for entrance.`}</p>
          </div>
        </RightContainer>
      </FormContainer>
      <FooterForm>
        <ButtonModalJoin>Join</ButtonModalJoin>
      </FooterForm>
    </>
  );
};

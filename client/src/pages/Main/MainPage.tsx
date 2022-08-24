import React, { useState } from 'react';
import { Button, MainWrapper } from './styles';
import userImg from '../../assets/userImage.png';

import LayoutRouting from './LayoutRouting/LayoutRouting';
import { useModal } from '../../hooks/useModal';
import ModalForm from '../../components/Forms/ModalForm';
import Modal from '../../components/Modals/Modal';

const MainPage: React.FC = () => {
  const { handleOpen, isOpen } = useModal();
  const [active, setActive] = useState(false);

  return (
    <>
      <MainWrapper>
        <div className="avatar-wrapper">
          <img className="avatar" alt="profilePhoto" src={userImg} />
        </div>
        <div className="name-wrapper">
          <h2 className="name">Ekaterina Fedoseeva</h2>
          <p className="isOnline">online</p>
        </div>
        <div className="info-wrapper-one">
          <div className="info-item">Location: Berlin</div>
          <div className="info-item">Followers: 2</div>
          <div className="info-item">Following: 5</div>
        </div>
        <div className="info-wrapper-two">
          <div className="info-item">Events: 2</div>
          <div className="info-item">Favorite sports:</div>
        </div>
        <div className="button-wrapper">
          <Button onClick={() => setActive(true)}>Create</Button>
          <Modal
            active={active}
            hideModal={() => setActive(false)}
            title="Create a new event!"
            children={<ModalForm closeWindow={() => setActive(false)} />}
          />
        </div>
      </MainWrapper>
      <LayoutRouting />
    </>
  );
};

export default MainPage;

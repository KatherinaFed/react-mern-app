import React, { useState } from 'react';
import { unix } from '../../helpers/functions/timestamper';
import { EventI } from '../../store/events/eventSlice';
import imageHike from '/Users/katie/mern-app/client/src/assets/hikeImg.jpg';
import {
  FirstColumn,
  Image,
  Info,
  ItemCardContainer,
  SecondColumn,
  Status,
} from './styles';
import Modal from '../Modals/Modal';
import {Form, Header} from '../Forms/FormEvent/Form';

const ItemCard = (props: EventI) => {
  const [active, setActive] = useState(false);

  let newDate;

  if (props.date && props.time) {
    newDate = unix(props.date, props.time);
  }

  return (
    <>
      <ItemCardContainer onClick={() => setActive(true)}>
        <Image>
          <img src={imageHike} alt="" />
        </Image>

        <Info>
          <FirstColumn>
            <div className="info-item">
              Activity: <p>{props.activity?.value}</p>
            </div>
            <div className="info-item">
              Date: <p>{newDate?.date}</p>
            </div>
            <div className="info-item">
              Time: <p>{newDate?.time}</p>
            </div>
          </FirstColumn>
          <SecondColumn>
            <div className="info-item">
              Location: <p>{props.location?.value}</p>
            </div>
            <div className="info-item">
              Creator: <p>{props.creator}</p>
            </div>
          </SecondColumn>
        </Info>

        <Status>
          <div className="info-status-item">
            <p className="status-text">Join</p>
          </div>
        </Status>
      </ItemCardContainer>
      <Modal
        active={active}
        hideModal={() => setActive(false)}
        title={<Header />}
        children={<Form />}
      />
    </>
  );
};

export default ItemCard;

import React, { useEffect } from 'react';
import {
  Button,
  ButtonWrapper,
  EventItemWrapper,
  ImageWrapper,
  InfoItem,
  InfoWrapperOne,
  InfoWrapperTwo,
} from './styles';

import ItemCard from '../../ItemCard/ItemCard';
import { EventI } from '../../../store/events/eventSlice';

const EventItem = (props: EventI) => {
  
  return (
    <EventItemWrapper>
      <ItemCard
            id={props.id}
            activity={props.activity}
            date={props.date}
            time={props.time}
            title={props.title}
            description={props.description}
            location={props.location}
            creator={props.creator}
            img={props.img}
          />
    </EventItemWrapper>
  );
};

export default EventItem;

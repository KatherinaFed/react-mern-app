import React from 'react';

import ItemCard from '../../../../../components/ItemCard/ItemCard';
import { UpcomingEventsContainer } from './styles';

const UpcomingEvents = () => {
  return (
    <UpcomingEventsContainer>
      {/* {upcomingList.map(({  activity, date, time, title, description, location, creator, img }) => (
        <ItemCard
          // id={id}
          activity={activity}
          date={date}
          time={time}
          title={title}
          description={description}
          location={location}
          creator={creator}
          img={img}
        />
      ))} */}
    </UpcomingEventsContainer>
  );
};

export default UpcomingEvents;

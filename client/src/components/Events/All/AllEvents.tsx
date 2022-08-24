import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/hook';
import { getEventsThunk } from '../../../store/events/eventThunk';
import Paginator from '../../Paginator/Paginator';
import EventItem from '../Item/EventItem';

const AllEvents = () => {
  const { events, pageSize, totalEventsCount, currentPage } = useAppSelector(
    (state) => state.events
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEventsThunk(currentPage, pageSize));
  }, [currentPage, pageSize, dispatch]);

  const onPageChanged = (currentPage: number) => {
    dispatch(getEventsThunk(currentPage, pageSize));
  };

  return (
    <>
    {events && events.map((item, key) => (
      <EventItem {...item} key={key} />
    ))}
      
      <Paginator
        page={currentPage}
        pageSize={pageSize}
        totalEventsCount={totalEventsCount}
        onPageChanged={onPageChanged}
      />
    </>
  );
};

export default AllEvents;

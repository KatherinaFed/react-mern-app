import { eventsAPI } from '../../services/api';
import {
  createEvent,
  EventI,
  setCurrentPage,
  setEvents,
  setTotalEventsCount,
  toggleIsFetching,
} from './eventSlice';

export const getEventsThunk = (page: number, pageSize: number) => async (dispatch: (arg: any) => void) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));
// debugger
  const response = await eventsAPI.getEvents(page, pageSize);

  dispatch(toggleIsFetching(false));
  dispatch(setEvents(response.results));
  dispatch(setTotalEventsCount(response.totalCount));
};

export const createEventThunk =
  (newEvent: EventI) => async (dispatch: (arg: any) => void) => {
    try {
      const response = await eventsAPI.createEvent(newEvent);
      dispatch(createEvent(response));
    } catch (error) {
      console.log(error);
    }
  };

// export const addEventImageThunk =
//   (file: string) => async (dispatch: (arg: any) => void) => {
//     try {
//       debugger
//       const response = await eventsAPI.addEventImage(file);
//       dispatch(addImage(response));
//     } catch (error: any) {
//       console.log(error.message);
//     }
//   };

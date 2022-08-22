import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

type OptionType = {
  label: string;
  value: string;
};

export interface EventI {
  // _id: string;
  activity: OptionType | null;
  title: string;
  description: string;
  date: number | null;
  time: number | null;
  location: OptionType | null;
  creator: string;
  img: string | null;
}

interface DataEventsI {
  events: EventI[];
  pageSize: number;
  totalEventsCount: number;
  currentPage: number;
  isFetching: boolean;
}

const eventSlice = createSlice({
  name: 'events',
  initialState: {
    events: [],
    pageSize: 10,
    totalEventsCount: 0,
    currentPage: 1,
    isFetching: true,
  } as DataEventsI,
  reducers: {
    setEvents(state, action) {
      return {
        ...state,
        events: action.payload,
      };
    },
    setTotalEventsCount(state, action) {
      return {
        ...state,
        totalEventsCount: action.payload,
      };
    },
    setCurrentPage(state, action) {
      return {
        ...state,
        currentPage: action.payload,
      };
    },
    createEvent(state, action: PayloadAction<EventI>) {
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    },
    toggleIsFetching(state, action) {
      return {
        ...state,
        isFetching: action.payload,
      };
    },
  },
});

export const {
  setEvents,
  setTotalEventsCount,
  setCurrentPage,
  createEvent,
  toggleIsFetching,
} = eventSlice.actions;
export default eventSlice.reducer;

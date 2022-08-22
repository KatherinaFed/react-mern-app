import { BasketIcon, ClimbingIcon, CyclingIcon, RunIcon, SwimmingIcon, TennisIcon, YogaIcon } from '../helpers/Icons';

type sportListT = {
  value: string;
  name: string;
  icon: JSX.Element;
};

export const sportList: sportListT[] = [
  { value: 'running', name: 'Running', icon: <RunIcon /> },
  { value: 'cycling', name: 'Cycling', icon: <CyclingIcon /> },
  { value: 'swimming', name: 'Swimming', icon: <SwimmingIcon /> },
  { value: 'climbing', name: 'Climbing', icon: <ClimbingIcon /> },
  { value: 'yoga', name: 'Yoga', icon: <YogaIcon /> },
  { value: 'basketball', name: 'Basketball', icon: <BasketIcon /> },
  { value: 'tennis', name: 'Tennis', icon: <TennisIcon /> },
];

import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { PropsT } from './types';

const BasicDatePicker = ({ value, setValue }: PropsT) => {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Date"
        value={value}
        onChange={(newData) => setValue(newData)}
        renderInput={(params) => <TextField {...params} />}
        inputFormat="dd/MM/yyyy"
      />
    </LocalizationProvider>
  );
};

export default BasicDatePicker;

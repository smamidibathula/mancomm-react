import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { MobileDateRangePicker } from '@mui/x-date-pickers-pro/MobileDateRangePicker';
import { Box, Grid, Tab, Tabs, TextField, useMediaQuery, useTheme  } from '@mui/material';

const Calendar = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {isMobile ? (
        <MobileDateRangePicker
          startText="Start Date"
          endText="End Date"
          value={[null, null]}
          onChange={() => {}}
          renderInput={() => <TextField />}
        />
      ) : <DateCalendar />}
    </LocalizationProvider>
  );
};

export default Calendar;

{/* import * as React from 'react';
import {Box, Grid,Typography, useMediaQuery, useTheme } from '@mui/material'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { MobileDateRangePicker } from '@mui/x-date-pickers-pro/MobileDateRangePicker';
import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker';

const Calendar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{ width: '100%', maxWidth: 600, margin: 'auto' }}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {isMobile ? (
        <MobileDateRangePicker
          startText="Start Date"
          endText="End Date"
          value={[null, null]}
          onChange={() => {}}
          renderInput={() => <TextField />}
        />
      ) : (
        <DesktopDateRangePicker
          startText="Start Date"
          endText="End Date"
          value={[null, null]}
          onChange={() => {}}
          renderInput={() => <TextField />}
        />
      )}
    </LocalizationProvider>
    </Box>
  );
};

export default Calendar; */}
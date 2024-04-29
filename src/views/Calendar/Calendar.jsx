import * as React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { MobileDateRangePicker } from "@mui/x-date-pickers-pro/MobileDateRangePicker";
import { TextField, useMediaQuery, useTheme } from "@mui/material";

const Calendar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
      ) : (
        <DateCalendar />
      )}
    </LocalizationProvider>
  );
};

export default Calendar;

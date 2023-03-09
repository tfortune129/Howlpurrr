import * as React from 'react';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';


export default function SubComponentsPickers() {
  const [date, setDate] = React.useState(dayjs().startOf('day'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={3} maxWidth='md'>
        <Grid item xs={12} md={11}>
          <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} 
          sx = {{backgrounColor: 'green', color: 'white'}}
           />
        </Grid>
        
      </Grid>
    </LocalizationProvider>
  );
}
import React from 'react'
import {Box, useTheme, useMediaQuery} from '@mui/material'
import Calendar from '../Calendar/Calendar'
import CalendarIcons from '../Calendar/CalendarIcons'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function CalendarLayout() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
     <Box 
     bgcolor="white" 
     height={800}
      width={isSmallScreen ? '100%' : 'auto'}
      flex={isSmallScreen ? 'none' : 2} 
     sx={{
      borderRadius: '0 30px 30px 0',
      margin: '20px 40px'
       }}>
        <CalendarIcons/>
             <Calendar />
    </Box>
  
    </>
    
  
    )
}

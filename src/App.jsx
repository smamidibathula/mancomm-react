import {Box, Stack} from '@mui/material'
import 'devextreme/dist/css/dx.light.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import MainMenu from './MainMenu.jsx'

function App() {

  return (
    <Router>
      <Box>
        <MainMenu />
        {/* <Routes> */}
          {/* <Route path="/report" component={NavBar} /> */}
        {/* </Routes> */}
      </Box>
    </Router>
   
        
    
  )
}

export default App

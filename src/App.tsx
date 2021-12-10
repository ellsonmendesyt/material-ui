import React from 'react';
import Home from './pages/Home';
import {Container, createMuiTheme,ThemeProvider} from '@material-ui/core'
import { red,grey,purple } from '@material-ui/core/colors';

import {Routes,Route} from 'react-router-dom'
import Create from './pages/Create';
import Notes from './pages/Notes';

const theme= createMuiTheme({
  palette:{
    primary:{
      main:'#a0abah'
    },
    secondary:purple
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Container>
      <Routes>
        <Route path='/create' element={<Notes/> } />
        <Route path='/' element={<Create/> } />
      </Routes>
        </Container>
     
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import Home from './pages/Home';
import {createMuiTheme,ThemeProvider} from '@material-ui/core'
import { red,grey } from '@material-ui/core/colors';

const theme= createMuiTheme({
  palette:{
    primary:{
      main:'#a0abah'
    },
    secondary:grey
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
     <Home/> 
    </ThemeProvider>
  );
}

export default App;

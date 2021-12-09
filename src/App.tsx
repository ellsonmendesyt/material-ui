import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Create from './pages/Create';



import Notes from './pages/Notes';



function App() {
  return (
    <React.Fragment>
    <Routes>
      <Route path='/' element={<Notes/>} />
      <Route path='/create' element={<Create/>} />
    </Routes>
    </React.Fragment>
  );
}

export default App;

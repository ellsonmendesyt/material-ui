import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Demo from './components/Demo';
import Create from './pages/Create';



import Notes from './pages/Notes';



function App() {
  return (
    <React.Fragment>
    <Routes>
      <Route path='/' element={<Create/>} />
      <Route path='/create' element={<Notes/>} />
    </Routes>
    {/* <Demo/> */}
    </React.Fragment>
  );
}

export default App;

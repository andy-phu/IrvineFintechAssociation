
import React from 'react'
import Home from './pages/Home'
import Meetus from './pages/Meetus'
import Events from './pages/Events'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/meetus' element={<Meetus/>} />
          <Route path='/events' element={<Events/>} />

        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;

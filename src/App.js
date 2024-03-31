import React from 'react'
import Home from './pages/Home'
import Board from './pages/Board'
import Events from './pages/Events'
import Joinus from './pages/Joinus'
import Advisors from './pages/Advisors'
import Gallery from './pages/Gallery'
import President from './pages/President'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Technology from './pages/Technology'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/board' element={<Board/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/joinus' element={<Joinus/>} />
          <Route path='/advisors' element={<Advisors/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/president' element = {<President/>} />
          <Route path='/technology' element = {<Technology/>} />
        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;


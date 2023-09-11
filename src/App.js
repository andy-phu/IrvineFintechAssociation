
import React from 'react'
import Home from './pages/Home'
import Board from './pages/Board'
import Events from './pages/Events'
import Joinus from './pages/Joinus'
import Advisors from './pages/Advisors'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

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

        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;


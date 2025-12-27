import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Players from './pages/Players'
import Staffs from './pages/Staffs'
import Schedules from './pages/Schedules'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='about' element={<About/>}/>
            <Route path='players' element={<Players/>}/>
            <Route path='staffs' element={<Staffs/>}/>
            <Route path='schedule' element={<Schedules/>}/>
            <Route path='contact-us' element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

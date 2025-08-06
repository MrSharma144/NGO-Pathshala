import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Routes } from 'react-router-dom'
import  Layout  from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Donate from './components/Donate/Donate.jsx'
import Volunteer from './components/Volunteer/Volunteer.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/donate' element={<Donate/>}/>
      <Route path="/volunteer" element={<Volunteer/>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Signup from './components/SignUp/Signup.jsx'
import Listing from './components/Listing/Listing.jsx'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route path='' element={<Home />} />
    <Route path='Login' element={<Login />} />
    <Route path='Signup' element={<Signup />} />
    <Route path='Listing' element={<Listing />} />
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

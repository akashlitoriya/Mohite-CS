import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import CA from './pages/CA'
function App() {
      const router = createBrowserRouter([
        {
          path:"/",
          element: <Home />
        },
        {
          path:"/:id",
          element: <CA />
        }
      ])

  return (
    <>
    <Navbar />  
    <RouterProvider router={router} >
      <Outlet />
    </RouterProvider>
    <Footer />
    </>
  )
}

export default App

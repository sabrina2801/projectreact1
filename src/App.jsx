import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Layout from './Layout/Layout'
import User from './pages/User'
import Home from './pages/Home'
import img1 from './image/Top Banner.png'
import UserDetail from './pages/UserDetail'
import Academics from './pages/Academics'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "user", element: <User /> },
      { path: "user/:id", element: <UserDetail /> },
       { path: "academics", element: <Academics/> },
    ]
  }
])

const App = () => {
  return (
    <div className='bg-[#FFF5F0]'>
      <img className='w-[100%] mt-[5px]' src={img1} alt="" />
        <RouterProvider router={router} />
    
    </div>
  )
}

export default App

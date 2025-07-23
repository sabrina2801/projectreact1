import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import img1 from '../image/Logo Container.png'

const Layout = () => {
  return (
    <div>
      <ul style={{display:"flex", gap:"100px", marginLeft:"80px", marginTop:"20px"}}>
        <img className='w-[150px] mt-[-5px] rounded' src={img1} alt="" />
        <li>
          <Link to={"/"}>Home</Link>
        </li>
         <li>
          <Link to={"/about"}>About</Link>
        </li>
          <li>
          <Link to={"/user"}>Student Life</Link>
        </li>
         <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/academics"}>Academics</Link>
        </li>
  



        
        <p>Admissions</p>
        <p className="flex items-center justify-center h-10 w-32 bg-[#FFAE80] rounded">Student Life</p>
         
      </ul>
      <Outlet/>
    </div>
  )
}

export default Layout

import React from 'react'
import img1 from '../image/Abstract Design.png'
import img2 from '../image/Container (1).png'
import { motion } from "framer-motion";
import footer from '../image/Footer.png'







const Academics = () => {


  
  return (
    <div>


        <div style={{border:"2px solid black"}} className='w-[90%] ml-[5%] mt-[50px] bg-[white] h-[300px] shadow-[10px_10px_10px_black] rounded-[20px] flex justify-around'>
           <img className=' w-[130px] h-[130px] mt-[5px] ml-[5px]' src={img1} alt="" />             
             <motion.h1 className="text-[30px] mt-[60px]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}transition={{ duration: 0.8, ease: "easeOut" }}>Join Our Family of Young Learners</motion.h1>
             <motion.p className="w-[90%] mt-[80px] leading-[28px] text-[gray]"initial={{ opacity: 0, y: 20 }}animate={{ opacity: 1, y: 0 }}transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}>At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school</motion.p>
        </div>


        <button className='mt-[100px] items-center justify-center ml-[680px] text-[15px] border py-2 px-2 rounded shadow-[0px_0px_5px_grey] '>Mission & Visions</button>
      <p className='text-center mt-[20px] text-[30px] font-bold'>Admission Process_</p>
      <p className='text-center mt-[15px] w-[50%] ml-[390px]'>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.</p>



      <div className='flex w-[70%] justify-between ml-[7%] mt-[60px]'>
        <img className='w-[100px] h-[85px]' src={img2} alt="" />
        <img className='w-[100px] h-[85px]' src={img2} alt="" />
        <img className='w-[100px] h-[85px]' src={img2} alt="" />
      </div>


      <div className='flex justify-around mt-[40px]'>
        <div style={{border:"2px solid black"}} className='w-[400px] h-[200px] shadow-[10px_10px_10px_black] rounded-[10px]'>
          <h1 className='text-[40px] ml-[10%] mt-[30px]'>Inquiry</h1>
          <p className='ml-[10%] text-[#6e6e6e]'>Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy</p>
        </div>
        <div style={{border:"2px solid black"}} className='w-[400px] h-[200px] shadow-[10px_10px_10px_black] rounded-[10px]'>
          <h1 className='text-[40px] ml-[10%] mt-[30px]'>Inquiry</h1>
          <p className='ml-[10%] text-[#6e6e6e]'>Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy</p>
        </div>
        <div style={{border:"2px solid black"}} className='w-[400px] h-[200px] shadow-[10px_10px_10px_black] rounded-[10px]'>
          <h1 className='text-[40px] ml-[10%] mt-[30px]'>Inquiry</h1>
          <p className='ml-[10%] text-[#6e6e6e]'>Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy</p>
        </div>












      </div>

















 <img className='w-[90%] ml-[5%] mt-[80px]' src={footer} alt="" />
    </div>
  )
}

export default Academics
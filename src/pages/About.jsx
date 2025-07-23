import React from 'react'
import img1 from '../image/Abstract Design.png'
import img2 from '../image/Icon (7).png'
import img3 from '../image/Icon (8).png'
import img4 from '../image/Card (11).png'
import img5 from '../image/Card (12).png'
import img6 from '../image/Card (13).png'
import img7 from '../image/Sub Container (1).png'
import img8 from '../image/Card (14).png'
import img9 from '../image/Card (15).png'
import img10 from '../image/Card (16).png'
import img11 from '../image/Card (17).png'
import img12 from '../image/Card (18).png'
import img13 from '../image/Card (19).png'
import footer from '../image/Footer.png'





const About = () => {
  
  return <div className=' bg-[#FFF5F0]'>

    <div style={{border:"2px solid black"}} className='w-[90%] ml-[5%] mt-[50px] bg-[white] h-[300px] shadow-[10px_10px_10px_black] rounded-[20px] flex justify-around'>
       <img className=' w-[130px] h-[130px] mt-[5px] ml-[5px]' src={img1} alt="" />
       <div className=''>
        <h1 className='text-[30px] mt-[60px]'>Welcome to Little Learners Academy</h1>
        <p className='w-[90%] mt-[20px] leading-[28px] text-[gray]'>A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.</p>
       </div>





    </div>
     <button className='mt-[100px] items-center justify-center ml-[680px] text-[15px] border py-2 px-2 rounded shadow-[0px_0px_5px_grey] '>Mission & Visions</button>
      <p className='text-center mt-[20px] text-[30px] font-bold'>Navigate through our Pages</p>
      <p className='text-center mt-[15px] w-[50%] ml-[390px]'>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.</p>
      <div className='flex justify-around mt-[80px]'>
        <div style={{border:"2px solid black"}} className='shadow-[10px_10px_10px_black] w-[500px] h-[380px] rounded-[10px] bg-white'>
          <div className='flex justify-around mt-[50px]'>
            <p className='text-[30px]  mt-[10px]'>Mission</p>
            <img className='w-[60px] h-[60px]' src={img2} alt="" />
          </div>
          <p className='w-[80%] mt-[30px] ml-[10%] leading-[28px] text-[gray]'>At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.</p>
        </div>
            <div style={{border:"2px solid black"}} className='shadow-[10px_10px_10px_black] w-[500px] h-[380px] rounded-[10px] bg-white'>
          <div className='flex justify-around mt-[50px]'>
            <p className='text-[30px]  mt-[7px]'>Vision</p>
            <img className='w-[70px] h-[55px]' src={img3} alt="" />
          </div>
          <p className='w-[80%] mt-[30px] ml-[10%] leading-[28px] text-[gray]'>At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.</p>
        </div>
      </div>
      <button className='mt-[100px] items-center justify-center ml-[670px] text-[15px] border py-2 px-2 rounded shadow-[0px_0px_5px_grey] '>Our Achievements</button>
      <p className='text-center mt-[20px] text-[30px] font-bold'>Our Awards and Recognitions</p>
      <p className='text-center mt-[15px] w-[50%] ml-[390px]'>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.</p>
      <div className='flex justify-around mt-[50px]'>
        <img className='w-[400px] h-[350px]' src={img4} alt="" />
        <img className='w-[400px] h-[350px]' src={img5} alt="" />
        <img className='w-[400px] h-[350px]' src={img6} alt="" />

      </div>
      <button className='mt-[100px] items-center justify-center ml-[700px] text-[15px] border py-2 px-2 rounded shadow-[0px_0px_5px_grey] '>Our Progressive Journey</button>
      <p className='text-center mt-[20px] text-[30px] font-bold'>Our Awards and Recognitions</p>
      <p className='text-center mt-[15px] w-[50%] ml-[390px]'>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.</p>
      <div style={{border:"2px solid black"}} className='w-[90%] h-[750px] shadow-[10px_10px_10px_black] mt-[50px] rounded-[10px] ml-[4%] bg-white'>
        <div className='flex mt-[50px] ml-[200px]' >
          <img className='w-[320px] h-[120px]' src={img7} alt="" />
          <div className='ml-[100px]'>
            <p className='text-[30px] mt-[-20px]'>Resilience and Future Horizons</p>
            <p className='w-[80%] text-gray-600'>Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.</p>
          </div>
        </div>
        <div className='flex mt-[50px] ml-[200px]' >
          <img className='w-[320px] h-[120px]' src={img7} alt="" />
          <div className='ml-[100px]'>
            <p className='text-[30px] mt-[-20px]'>Innovation and Technology</p>
            <p className='w-[80%] text-gray-600'>Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.</p>
          </div>
        </div>
        <div className='flex mt-[50px] ml-[200px]' >
          <img className='w-[320px] h-[120px]' src={img7} alt="" />
          <div className='ml-[100px]'>
            <p className='text-[30px] mt-[-20px]'>Expansion and Recognition</p>
            <p className='w-[80%] text-gray-600'>Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.</p>
          </div>
        </div>
        <div className='flex mt-[50px] ml-[200px]' >
          <img className='w-[320px] h-[120px]' src={img7} alt="" />
          <div className='ml-[100px]'>
            <p className='text-[30px] mt-[-20px]'>Inception and Growth</p>
            <p className='w-[80%] text-gray-600'>Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.</p>
          </div>
        </div>
      </div>
      <button className='mt-[100px] items-center justify-center ml-[640px] text-[15px] border py-2 px-2 rounded shadow-[0px_0px_5px_grey] '>Our Progressive Journey</button>
      <p className='text-center mt-[20px] text-[30px] font-bold'>Our Awards and Recognitions</p>
      <p className='text-center mt-[15px] w-[50%] ml-[390px]'>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.</p>
     <div className='flex justify-around mt-[50px]'>
      <img className='w-[550px] h-[380px]' src={img8} alt="" />
      <img className='w-[550px] h-[380px]' src={img9} alt="" />
     </div>
      <div className='flex justify-around mt-[50px]'>
      <img className='w-[550px] h-[380px]' src={img13} alt="" />
      <img className='w-[550px] h-[380px]' src={img10} alt="" />
     </div>
      <div className='flex justify-around mt-[50px]'>
      <img className='w-[550px] h-[380px]' src={img11} alt="" />
      <img className='w-[550px] h-[380px]' src={img12} alt="" />
     </div>
   <img className='w-[90%] ml-[5%] mt-[80px]' src={footer} alt="" />
  </div>
}

export default About



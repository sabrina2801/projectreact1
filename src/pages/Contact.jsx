import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img3 from '../image/Card (1).png'
import img4 from '../image/Card (2).png'
import img5 from '../image/Card (3).png'
import img6 from '../image/Card (4).png'
import img7 from '../image/Card (5).png'
import img8 from '../image/Card (6).png'
import img1 from '../image/Abstract Design.png'
import img9 from '../image/Image (34).png'
import img10 from '../image/Image (35).png'
import img11 from '../image/Image (36).png'
import img12 from '../image/Image (37).png'
import img13 from '../image/Image (38).png'
import img14 from '../image/Image (39).png'
import img15 from '../image/f364a2cdb3bb773f62c9e6e66a8277b0fb1a214d.png'
import img16 from '../image/5f639130589fda7dac59ca42ae7eab2a1777a0d8.png'
import img17 from '../image/1a963b08bf4cb11e031b14ac1a1dae8b9cc300aa.png'
import img22 from '../image/e8c496bc47dceb7fd662899bf3c503978a17a28c.png'
import img18 from '../image/c456ce5f2dfe85eb59919dce8db60e5602049e2a.png'
import img19 from '../image/09e732adeeb3a82144e76c6dd6e522a9d020dc6e.png'
import img20 from '../image/fbaee43d44cc6ac982307531302c0ec887ca040a.png'
import img21 from '../image/a1f60bfbab9369bc24059d59e5b90d250a8b310b.png'
import footer from '../image/Footer.png'
import { useSpring, animated } from '@react-spring/web';






const Contact = () => {
  const headingStyle = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    config: { tension: 170, friction: 26 },
  });

  const paragraphStyle = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 300,
    config: { tension: 170, friction: 26 },
  });




  return (
   <div>


     <div style={{ border: "2px solid black" }}className="w-[90%] ml-[5%] mt-[50px] bg-white h-[300px] shadow-[10px_10px_10px_black] rounded-[20px] flex items-center" >
        <img className="w-[130px] h-[130px] ml-[5px] mt-[-160px]" src={img1} alt="" />
        <div className="ml-6 mt-[-60px]">
          <animated.h1 style={headingStyle} className="text-[30px]">Join Our Family of Young Learners</animated.h1>
          <animated.p style={paragraphStyle} className="w-[90%] mt-[4] leading-[28px] text-gray-500"> At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school </animated.p>
        </div>
      </div>










  

  
     <button className='mt-[100px] items-center justify-center ml-[680px] text-[15px] border py-2 px-2 rounded shadow-[0px_0px_5px_grey] '>Mission & Visions</button>
      <p className='text-center mt-[20px] text-[30px] font-bold'>Navigate through our Pages</p>
      <p className='text-center mt-[15px] w-[50%] ml-[390px]'>With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.</p>

    <div> 
      <div className='flex justify-around mt-[80px]'>
        <div style={{border:"2px solid black"}} className='w-[350px] h-[400px] shadow-[10px_10px_10px_black] rounded-[10px]'>
          <img className='w-[90%] ml-[5%] pt-[20px]' src={img9} alt="" />
          <p className='text-[20px] text-center font-bold mt-[20px]'>Language Arts</p>
          <p className='text-center mt-[10px]'>Reading, writing, storytelling, and communication skills.</p>
        </div>
          <div style={{border:"2px solid black"}} className='w-[350px] h-[400px] shadow-[10px_10px_10px_black] rounded-[10px]'>
          <img className='w-[90%] ml-[5%] pt-[20px]' src={img10} alt="" />
          <p className='text-[20px] text-center font-bold mt-[20px]'>Mathematics</p>
          <p className='text-center mt-[10px]'>Reading, writing, storytelling, and communication skills.</p>
        </div>
          <div style={{border:"2px solid black"}} className='w-[350px] h-[400px] shadow-[10px_10px_10px_black] rounded-[10px]'>
          <img className='w-[90%] ml-[5%] pt-[20px]' src={img11} alt="" />
          <p className='text-[20px] text-center font-bold mt-[20px]'>Science</p>
          <p className='text-center mt-[10px]'>Reading, writing, storytelling, and communication skills.</p>
        </div>
      </div> 
      <div className='flex justify-around mt-[80px]'>
        <div style={{border:"2px solid black"}} className='w-[350px] h-[400px] shadow-[10px_10px_10px_black] rounded-[10px]'>
          <img className='w-[90%] ml-[5%] pt-[20px]' src={img12} alt="" />
          <p className='text-[20px] text-center font-bold mt-[20px]'>Language Arts</p>
          <p className='text-center mt-[10px]'>Reading, writing, storytelling, and communication skills.</p>
        </div>
          <div style={{border:"2px solid black"}} className='w-[350px] h-[400px] shadow-[10px_10px_10px_black] rounded-[10px]'>
          <img className='w-[90%] ml-[5%] pt-[20px]' src={img13} alt="" />
          <p className='text-[20px] text-center font-bold mt-[20px]'>Language Arts</p>
          <p className='text-center mt-[10px]'>Reading, writing, storytelling, and communication skills.</p>
        </div>
          <div style={{border:"2px solid black"}} className='w-[350px] h-[400px] shadow-[10px_10px_10px_black] rounded-[10px]'>
          <img className='w-[90%] ml-[5%] pt-[20px]' src={img14} alt="" />
          <p className='text-[20px] text-center font-bold mt-[20px]'>Language Arts</p>
          <p className='text-center mt-[10px]'>Reading, writing, storytelling, and communication skills.</p>
        </div>
      </div>
      </div>

 

      <button className='mt-[100px] items-center justify-center ml-[680px] text-[15px] border py-2 px-2 rounded shadow-[0px_0px_5px_grey] '>Mission & Visions</button>
      <p className='text-center mt-[20px] text-[30px] font-bold'>What Students Learn</p>
      <p className='text-center mt-[15px] w-[50%] ml-[380px]'>At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include</p>


      <div>
         <div className='flex justify-around  mt-[30px]'>
        <img className='w-[400px] h-[290px]' src={img3} alt="" />
        <img className='w-[400px] h-[290px]' src={img4} alt="" />
        <img className='w-[400px] h-[290px]' src={img5} alt="" />
       </div>
        <div className='flex justify-around  mt-[30px]'>
        <img className='w-[400px] h-[290px]' src={img6} alt="" />
        <img className='w-[400px] h-[290px]' src={img7} alt="" />
        <img className='w-[400px] h-[290px]' src={img8} alt="" />
       </div>
      </div>







<h1 className='text-[40px] text-center mt-[90px]'>Classrooms</h1>
     <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false,}} pagination={{ clickable: true,}} navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper mt-[40px]">
        <SwiperSlide><img className='w-[1000px] h-[450px] ml-[17%]' src={img15} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[1000px] h-[450px] ml-[17%]' src={img16} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[1000px] h-[450px] ml-[17%]' src={img17} alt="" />3</SwiperSlide>
        <SwiperSlide><img className='w-[1000px] h-[450px] ml-[17%]' src={img22} alt="" />3</SwiperSlide>
      </Swiper>




      <h1 className='text-[40px] text-center mt-[90px]'>Library</h1>
     <Swiper pagination={true} modules={[Pagination]} className="mySwiper mt-[50px]">
        <SwiperSlide><img className='w-[1000px] h-[450px] ml-[17%]' src={img18} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[1000px] h-[450px] ml-[17%]' src={img19} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[1000px] h-[450px] ml-[17%]' src={img20} alt="" />3</SwiperSlide>
        <SwiperSlide><img className='w-[1000px] h-[450px] ml-[17%]' src={img21} alt="" />3</SwiperSlide>
      </Swiper>



      <img className='w-[90%] ml-[5%] mt-[80px]' src={footer} alt="" />



    
   </div>
  );
};

export default Contact;

'use client'
import React from 'react'
import { useState } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { EffectCoverflow, Pagination, Autoplay, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const index = () => {


  return (
    <div id='skills' className='text-center'>
        <a href='#skills' className='cursor-pointer hover:text-[#FFB6C1]'><h1 className='mx-auto mb-16 text-5xl sm:pt-36 pt-16'>My Skills</h1></a>
        <div className='bg-black '>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          loop={true}
          centeredSlides={true}

          breakpoints={ {
            0: {
                slidesPerView: 2,
            },
            
            480: {
                slidesPerView: 2,
            },
            
            768: {
                slidesPerView: 3,
            },

            1024: {
                slidesPerView: 6,
            },

            1280: {
                slidesPerView: 7,
            },
        }}

          // slidesPerView={'7'}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 50,
            modifier: 1,
            // slideShadows: true,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="2xl:container !mx-auto flex justify-center pt-16 h-[485px]"
      >
              <SwiperSlide className='p-7 pb-12 pt-32 '>
                <figure className='sm:w-[200px] w-[100px]'>
                <img src='images/skills/html.png'  width='100px' height='100px' />
                <figcaption className='text-white text-xl pt-6'>HTML5</figcaption>
                </figure>
              </SwiperSlide>

              <SwiperSlide className='p-7 pb-12 pt-32 '>
                <figure className='sm:w-[200px] w-[100px]'>
                <img src='images/skills/css.png'  width='100px' height='100px'  />
                <figcaption className='text-white text-xl pt-6'>CSS</figcaption>
                </figure>
              </SwiperSlide>
              
              <SwiperSlide className='p-7 pb-12 pt-32 '>
                <figure className='sm:w-[200px] w-[100px]'>
                <img src='images/skills/tailwind.jpg'  width='100px' height='100px' />
                <figcaption className='text-white text-xl pt-6'>Tailwind CSS</figcaption>
                </figure>
              </SwiperSlide>
              
              <SwiperSlide className='p-7 pb-12 pt-32 '>
                <figure className='sm:w-[200px] w-[100px]'>
                <img src='images/skills/javascript.png'  width='100px' height='100px' />
                <figcaption className='text-white text-xl pt-6'>JavaScript</figcaption>
                </figure>
              </SwiperSlide>

              <SwiperSlide className='p-7 pb-12 pt-32 '>
                <figure className='sm:w-[200px] w-[100px]'>
                <img src='images/skills/react.png'  width='100px' height='100px' />
                <figcaption className='text-white text-xl pt-6'>ReactJS</figcaption>
                </figure>
              </SwiperSlide>
              
              <SwiperSlide className='p-7 pb-12 pt-32 '>
                <figure className='sm:w-[200px] w-[100px]'>
                <img src='images/skills/nextjs.png'  width='350px' height='350px' />
                <figcaption className='text-white text-xl pt-6'>NextJS</figcaption>
                </figure>
              </SwiperSlide>

              <SwiperSlide className='p-7 pb-12 pt-32 '>
                <figure className='sm:w-[200px] w-[100px]'>
                <img src='images/skills/netlify.png'  width='100px' height='100px' />
                <figcaption className='text-white text-xl pt-6'>Netlify</figcaption>
                </figure>
              </SwiperSlide>

              <SwiperSlide className='p-7 pb-12 pt-32 '>
                <figure className='sm:w-[200px] w-[100px]'>
                <img src='images/skills/github.png'  width='100px' height='100px' />
                <figcaption className='text-white text-xl pt-6'>Github</figcaption>
                </figure>
              </SwiperSlide>

              <SwiperSlide className='p-7 pb-12 pt-32 '>
                <figure className='sm:w-[200px] w-[100px]'>
                <img src='images/skills/gitlab.png'  width='100px' height='100px' />
                <figcaption className='text-white text-xl pt-6'>GitLab</figcaption>
                </figure>
              </SwiperSlide>

              <SwiperSlide className='p-7 pb-12 pt-32 '>
                <figure className='sm:w-[200px] w-[100px]'>
                <img src='images/skills/laravel.png'  width='100px' height='100px' />
                <figcaption className='text-white text-xl pt-6'>Laravel</figcaption>
                </figure>
              </SwiperSlide>
       
              <SwiperSlide className='p-7 pb-12 pt-32 '>
                <figure className='sm:w-[200px] w-[100px]'>
                <img src='images/skills/zpl.png'  width='100px' height='100px' />
                <figcaption className='text-white text-xl pt-6'>ZPL</figcaption>
                </figure>
              </SwiperSlide>

              <SwiperSlide className='p-7 pb-12 pt-32'>
                <figure className='sm:w-[200px] w-[100px]'>
                <img src='images/skills/c++.png' width='100px' height='100px' />
                <figcaption className='text-white text-xl pt-6 pt-6'>C++</figcaption>
                </figure>
              </SwiperSlide>

              <SwiperSlide className='p-7 pb-12 pt-32 '>
                <figure className='sm:w-[200px] w-[100px]'>
                <img src='images/skills/java.png'  width='100px' height='100px' />
                <figcaption className='text-white text-xl pt-6'>Java</figcaption>
                </figure>
              </SwiperSlide>

              <SwiperSlide className='p-7 pb-12 pt-32 '>
                <figure className='sm:w-[200px] w-[100px]'>
                <img src='images/skills/sql.png'  width='100px' height='100px' />
                <figcaption className='text-white text-xl pt-6'>SQL</figcaption>
                </figure>
              </SwiperSlide>
              

              <SwiperSlide className='p-7 pb-12 pt-32 '>
                <figure className='sm:w-[200px] w-[100px]'>
                <img src='images/skills/x++.jpg'  width='100px' height='100px' />
                <figcaption className='text-white text-xl pt-6'>X++</figcaption>
                </figure>
              </SwiperSlide>



              <SwiperSlide className='p-7 pb-12 pt-32 '>
                <figure className='sm:w-[200px] w-[100px]'>
                <img src='images/skills/d365.png'  width='100px' height='100px' />
                <figcaption className='text-white text-xl pt-6'>Microsoft Dynamics 365</figcaption>
                </figure>
              </SwiperSlide>

              
              <SwiperSlide className='p-7 pb-12 pt-32 '>
                <figure className='sm:w-[200px] w-[100px]'>
                <img src='images/skills/sqlserver.png'  width='100px' height='100px' />
                <figcaption className='text-white text-xl pt-6'>Microsoft SQL Server</figcaption>
                </figure>
              </SwiperSlide>

              <SwiperSlide className='p-7 pb-12 pt-32 '>
                <figure className='sm:w-[200px] w-[100px]'>
                <img src='images/skills/ssrs.png'  width='80px' height='80px' />
                <figcaption className='text-white text-xl pt-6'>SQL Server Reporting Services</figcaption>
                </figure>
              </SwiperSlide>


              
            
            </Swiper>
        </div>
    </div>
  )
}

export default index
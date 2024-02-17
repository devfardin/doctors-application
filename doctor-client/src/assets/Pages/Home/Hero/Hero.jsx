import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './styles.css';
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation,Autoplay } from 'swiper/modules';
import Container from '../../../Share/Container';
import BdButton from '../../../Share/button/BdButton';
import BgButton from '../../../Share/button/BgButton';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {
  useEffect(()=>{
    Aos.init({
      duration: 1000,

    })
  },[])

  return (
    <div className='overflow-hidden bg-[url(https://i.ibb.co/DR743Vx/banner-img.png)] lg:px-10 bg-cover bg-no-repeat bg-center'>
      <Swiper 
      navigation={true}  
      autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]} 
        className="mySwiper background">

        <SwiperSlide>
          <Container>
            <div className='flex flex-col md:flex-row justify-between  md:gap-10 items-center max-w-5xl mx-auto'>
              <div className='flex-1 hidden md:block'>
                <img data-aos="fade-left"  className='' src="https://i.ibb.co/LJPJ5Xz/img-01-1.png" alt="" />
              </div>
              <div data-aos="fade-left"  className='flex-1'>
                <h1 className='text-6xl md:text-7xl lg:text-9xl font-light text-left mt-3 text-textColor'>01.</h1>
                <h1 className='text-4xl md:text-5xl lg:text-5xl font-bold text-left mt-3  text-primery'>Emergency?</h1>
                <h1 className='text-5xl md:text-5xl lg:text-7xl font-bold  text-left mt-3 text-secondery'>Find Nearest</h1>
                <h1 className='text-4xl md:text-5xl lg:text-5xl font-bold  text-left mt-3 text-primery'>Medical Facility
                </h1>
                <div className='flex gap-6 mt-6'>
                  <BgButton lable='View Hospitals' address='/'/>
                  <BdButton lable='View Doctors' address='/' />
                </div>
              </div>
            </div>
          </Container>
        </SwiperSlide>
        
        <SwiperSlide>
          <Container>
            <div className='flex flex-col md:flex-row justify-between  md:gap-10 items-center lg:max-w-5xl mx-auto'>
              <div data-aos-delay='3000' data-aos="fade-left"  className='flex-1 hidden md:block'>
                <img className='' src="https://i.ibb.co/cgqdt6q/img-02-3.png" alt="" />
              </div>
              <div data-aos="fade-left"  className='flex-1'>
                <h1 className='text-6xl md:text-7xl lg:text-9xl font-light text-left mt-3 text-textColor'>02.</h1>
                <h1 className='text-4xl md:text-5xl lg:text-5xl font-bold text-left mt-3  text-primery'>Emergency?</h1>
                <h1 className='text-5xl md:text-5xl lg:text-7xl font-bold  text-left mt-3 text-secondery'>Find Nearest</h1>
                <h1 className='text-4xl md:text-5xl lg:text-5xl font-bold  text-left mt-3 text-primery'>Medical Facility
                </h1>
                <div className='flex gap-6 mt-6
                '>
                  <BdButton lable='View Doctors' address='/' />
                  <BgButton lable='View Hospitals' address='/'/>
                </div>
              </div>
            </div>
          </Container>
        </SwiperSlide>
      
        <SwiperSlide>
          <Container>
            <div className='flex flex-col md:flex-row justify-between  md:gap-10 items-center lg:max-w-5xl mx-auto'>
              <div data-aos="fade-left"  className='flex-1 hidden md:block'>
                <img className='' src="https://i.ibb.co/Bsn3kbm/img-03-2.png" alt="" />
              </div>
              <div data-aos="fade-left"  className='flex-1'>
                <h1 className='text-6xl md:text-7xl lg:text-9xl font-light text-left mt-3 text-textColor'>03.</h1>
                <h1 className='text-4xl md:text-5xl lg:text-5xl font-bold text-left mt-3  text-primery'>Emergency?</h1>
                <h1 className='text-5xl md:text-5xl lg:text-7xl font-bold  text-left mt-3 text-secondery'>Find Nearest</h1>
                <h1 className='text-4xl md:text-5xl lg:text-5xl font-bold  text-left mt-3 text-primery'>Medical Facility
                </h1>
                <div className='flex gap-6 mt-6'>
                  <BdButton lable='View Doctors' address='/' />
                  <BgButton lable='View Hospitals' address='/'/>
                </div>
              </div>
            </div>
          </Container>
        </SwiperSlide>
      

      </Swiper>
    </div>
  )
}

export default Hero
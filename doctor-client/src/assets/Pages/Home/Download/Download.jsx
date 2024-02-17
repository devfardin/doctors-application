import React, { useEffect } from 'react'
import Container from '../../../Share/Container'
import Aos from 'aos'

const Download = () => {
    useEffect(()=>{
        Aos.init({
            duration:1000
        })
    },[])
    return (
       
            <div className=' bg-sectionbg py-7'>
                 <Container>
               <div  className='flex flex-col md:flex-row gap-10 bg-sectionbg items-center'>
               <div className='flex-1' data-aos="zoom-in">
                    <img src="https://i.ibb.co/6YHNYvM/img-01-4.png" alt="" />
                </div>

                <div className='flex-1' data-aos="fade-up" data-aos-duration="1500" >
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-secondery mb-2 text-left'>Care On The GO</h1>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-normal text-primery mb-2 text-left'>Download Mobile App</h1>
                <p className='text-base font-normal mb-4 text-neutral-500 text-left'>
                Lorem ipsum dolor amet consectetur adipisicing eliteiuim sete eiusmod tempor incididunt ut labore etnalom dolore magna aliqua.
                </p>
                <div className='flex items-center gap-6'>
               

                    <img className='w-[28%] rounded-md' src="https://amentotech.com/projects/doctreat/wp-content/uploads/2019/08/img-03.png" alt="" />
                    <img className='w-[28%] rounded-md' src="https://amentotech.com/projects/doctreat/wp-content/uploads/2019/08/img-02.png" alt="" />
                </div>
                </div>
               </div>
                </Container>
            </div>
       
    )
}

export default Download
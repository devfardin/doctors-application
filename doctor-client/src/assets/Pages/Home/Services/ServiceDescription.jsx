import React, { useEffect } from 'react'
import Container from '../../../Share/Container'
import BdButton from '../../../Share/button/BdButton'
import Aos from 'aos'

const ServiceDescription = () => {
    useEffect(()=>{
        Aos.init({
            duration: 1000
        })
    },[])
  return (
   <Container>
     <div className='flex flex-col md:flex-row overflow-hidden items-center justify-between gap-6 mt-16'>
        <div className='flex-1' data-aos="fade-right">
            <img  className='rounded-lg w-[100%]' width='100' src="https://i.ibb.co/tBzH9dX/Rectangle-10.png" alt="" />
        </div>
        <div className='flex-1' data-aos='fade-left'>
        <h1 className='text-2xl md:text-2xl font-semibold text-secondery mb-4 text-left'>Electro  Gastrology Therapy</h1>
        <p className='text-base font-normal mb-2 text-neutral-500 text-left'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
        <p className='text-base font-normal text-neutral-500 text-left mb-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
        <BdButton  address='/' lable='More Details'/>
        </div>
    </div>
   </Container>
  )
}

export default ServiceDescription
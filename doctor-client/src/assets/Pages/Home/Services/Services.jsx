import React, { useEffect, useState } from 'react'
import { getServices } from '../../../APIs/getdata'
import TitleDes from '../../../Share/TitleDes'
import Container from '../../../Share/Container'
import Aos from 'aos'

const Services = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    getServices()
      .then(data => { setServices(data) })
      Aos.init({
        duration:1000
      })
  }, [])

  return (
    <Container>
      <div className=' mt-14 mb-7'>
        <TitleDes des='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' title='Our Services' />
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center gap-5'>
        {
          services.map((service, index) => <div key={index} data-aos="zoom-in" className='p-4 shadow text-center rounded-md border border-gray-300 shadow-gray-200'>
            <img className='inline-block' src={service.img} />
            <h1 className='text-base font-semibold mt-3 text-neutral-600 text-center'>{service.name}</h1>
          </div>)
        }
      </div>
    </Container>
  )
}

export default Services
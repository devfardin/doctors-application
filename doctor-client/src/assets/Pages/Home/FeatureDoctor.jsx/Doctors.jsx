import React, { useEffect, useState } from 'react'
import Doctor from './Doctor'
import Container from '../../../Share/Container'
import TitleDes from '../../../Share/TitleDes'
import Loading from '../../../Share/Loading'
import { getDoctors } from '../../../APIs/getdata'

const Doctors = () => {
  const [doctors, setDoctors] = useState([])
  const [loading, setLoading]= useState(false)
  useEffect(() => {
    setLoading(true)
    getDoctors()
      .then(data =>{
        setDoctors(data)
        setLoading(false)
      })
  }, [])
  return (
    <Container>
      <div className='mt-16 mb-10'>
        <TitleDes title='Our Expert Doctors' des='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' />
      </div>

      {
        loading ? <Loading/> : <div className='grid grid-cols-1 md:grid-cols-3 gap-7'>

        {
          doctors.map((doctor, index) => <Doctor key={index} doctor={doctor} />)
        }
      </div>
      }
    </Container>
  )
}

export default Doctors
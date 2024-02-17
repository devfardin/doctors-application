import React, { useEffect, useState } from 'react'
import { getDoctorProfile } from '../../APIs/getdata'
import { useParams } from 'react-router-dom'
import Container from '../../Share/Container'
import ReactStars from 'react-stars'
import BdButton from '../../Share/button/BdButton'
import Loading from '../../Share/Loading'
import DoctorTab from './doctorInfo/DoctorTab'

const DoctorsProfile = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [doctor, setDoctor] = useState([])
    useEffect(() => {
        setLoading(true)
        getDoctorProfile(id)
            .then(data => {
                setDoctor(data)
                setLoading(false)
            })
    }, [])
    const { name, email, title, profile, address, mapLocation, feedback, price, shortDescription, description, availableTime, offeredServices, experience, education, specializations, languages, registrations, gallery } = doctor
    return (
        <div className='bg-[#F3F3F3] py-10'>
            <Container>
                {
                    loading ?
                        <Loading />
                        :
                        <div>
                            <div className='grid grid-cols-7 gap-6  justify-between'>

                                <div className='col-span-7 md:col-span-7 lg:col-span-5'>
                                    <div className='flex flex-col md:flex-row items-center gap-6 bg-white p-4 rounded-lg'>
                                        <div>
                                            <img src={profile} alt="" />
                                        </div>
                                        <div>
                                            <h1 className='text-xl font-normal text-link'>{title}</h1>
                                            <h1 className='text-2xl font-semibold text-neutral-600 mb-1'>{name}</h1>
                                            <h1 className='text-lg font-normal text-neutral-400 mb-2'> Starting Price: ${price} </h1>
                                            <h1 className='text-base font-medium flex items-center gap-2 text-[#767676] mb-2'> <ReactStars
                                                value={4}
                                                edit={false}
                                                size={30}
                                                color2={'#ffd700'} /> Feedback</h1>
                                            <p className='text-base mb-2 font-medium flex items-center gap-2 text-[#767676]'>{shortDescription}</p>
                                            <BdButton lable='Booking Now' address='/' />
                                        </div>
                                    </div>
                                    <div className='bg-white mt-6 p-4 rounded-lg col-span-2'>
                                        <DoctorTab  doctor={doctor}/>
                                    </div>
                                </div>

                                <div className='col-span-7 md:col-span-7 lg:col-span-2'>
                                   <div className='bg-white p-4 rounded-lg '>
                                   <img src="" alt="" />
                                   </div>
                                </div>
                            </div>
                        </div>
                }
            </Container>
        </div>
    )
}

export default DoctorsProfile
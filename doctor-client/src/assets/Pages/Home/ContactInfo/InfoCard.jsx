import Aos from 'aos'
import React, { useEffect } from 'react'
const InfoCard = ({ info }) => {
    const { name, icon: Icon,color  } = info
    const bgColor={
        backgroundColor:color,
    }
    useEffect(()=>{
        Aos.init({
            duration:1000
        })
    },[])

    return (
        <div  data-aos="zoom-in" style={bgColor} className={`flex gap-3 items-top p-5 rounded-md`}>
            <div>
                <Icon className='text-white text-3xl' />
            </div>
            <div>
                <h1 className='text-xl font-medium text-white mb-1 '>{name}</h1>
                <p className='text-sm font-light text-white'>{info.details}</p>
            </div>
        </div>
    )
}

export default InfoCard
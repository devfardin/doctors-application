import React from 'react'
import Container from '../../../Share/Container'
import { MdOutlineWatchLater } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import InfoCard from './infoCard';


const ContactInfo = () => {
    const info = [
        {
            name: 'Opening Hours',
            icon: MdOutlineWatchLater,
            color: '#FF5851',
            details: 'Open 9.00 am to 5.00pm'
        },
        {
            name: 'Our Locations',
            icon: SlLocationPin,
            color:'#3D4461',
            details: 'Dhanmondi 17, Dhaka -1200'
        },
        {
            name: 'Contact Us',
            icon: MdOutlinePhoneCallback,
            color:'#3fabf3',
            details: '+88 01750 00 00 00'
        },
        {
            name: 'Email Address',
            icon: FaRegEnvelope,
            color:'#07332F',
            details:'info.doctors@gmail.com'
              
        },
    ]
    return (
        <Container>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  items-center justify-between gap-5 my-14'>
                {
                    info.map((info, index) =><InfoCard key={index} info={info}> </InfoCard>)
                }

            </div>
        </Container>
    )
}

export default ContactInfo
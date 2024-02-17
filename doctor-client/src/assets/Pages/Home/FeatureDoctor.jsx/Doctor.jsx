import Aos from 'aos'
import React, { useEffect } from 'react'
import ReactStars from 'react-stars'
import { SlLocationPin } from "react-icons/sl";
import { CiCalendarDate } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Doctor = ({ doctor }) => {
  const { _id, name, profile, address, feedback, price, title, availableTime } = doctor
  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])
  console.log(name.slice(' '));
  return (
    <div data-aos="zoom-in" className='border border-gray-300 rounded-lg p-3'>
        <img className='w-full' src={profile} alt="" />
      <div className='ml-2'>
        <h1 className='text-xl font-semibold text-neutral-700 mb-0.5 mt-3'>{name}</h1>
        <h1 className='text-xl font-normal text-neutral-500 '>{title}</h1>
        <h1 className='text-lg font-medium flex items-center gap-2 text-[#767676]'> <ReactStars
          value={4}
          edit={false}
          size={20}
          color2={'#ffd700'} /> {feedback.length} Feedback</h1>
      </div>
      <div className='my-3 ml-2'>
      <h1 className='text-lg mb-2 font-medium flex items-center gap-2 text-[#767676]'><AiOutlineDollar className='text-2xl' /> ${price} </h1>
        <h1 className='text-lg mb-2 font-medium flex items-center gap-2 text-[#767676]'><SlLocationPin className='text-2xl' /> {address} </h1>
        <h1 className='text-lg mb-2 font-medium flex items-center gap-2 text-[#767676]'><CiCalendarDate className='text-2xl' /> {availableTime} </h1>
      </div>
      <div className='mt-4'>
        <Link  className='text-lg w-full text-center font-light text-secondery border-link rounded-md border-2 px-7 py-[9px] hover:bg-link duration-200 hover:shadow-xl  hover:text-white hover:shadow-[#3fabf37e] inline-block' to={`doctor/${_id}`} >View Profile</Link>
      </div>
    </div>
  )
}
export default Doctor
import React from 'react'
import { Link } from 'react-router-dom'

const BgButton = ({lable, address}) => {
  return (
    <div>
        <Link className='text-base font-light border-link rounded border-2 px-7 py-[10px] bg-link duration-200 hover:shadow-xl  text-white hover:shadow-[#3fabf37e] inline-block' to={address}>{lable}</Link>
    </div>
  )
}

export default BgButton
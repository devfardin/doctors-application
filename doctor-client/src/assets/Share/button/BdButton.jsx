import React from 'react'
import { Link } from "react-router-dom"; 

const BdButton = ({lable, address}) => {
  return (
    <div>
        <Link className='text-base font-light text-secondery border-link rounded border-2 px-7 py-[10px] hover:bg-link duration-200 hover:shadow-xl  hover:text-white hover:shadow-[#3fabf37e] inline-block' to={address}>{lable}</Link>
    </div>
  )
}

export default BdButton
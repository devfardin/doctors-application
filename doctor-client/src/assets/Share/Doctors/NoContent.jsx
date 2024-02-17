import React from 'react'
import noContent from '../../../../public/Images/img-01.png'
const NoContent = ({title}) => {
  return (
    <div className='flex h-full pb-7 border-dashed border-2 w-full items-center justify-center'>
     <div>
     <img src={noContent} alt="" />
        <h1 className='text-lg font-normal text-neutral-400 mb-3 text-center'>{title}</h1>
     </div>
    </div>
  )
}

export default NoContent
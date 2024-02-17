import React from 'react'
const Specializations = ({specializations}) => {
  return (
    <div className='mt-2'>
    {
        specializations?.map((specializations, index)=> <div key={index} className='border-b border-x first:border-t px-4 border-textColor hover:bg-neutral-100 duration-300'> 
        <h1 className='text-base  font-normal text-neutral-500 py-3 '>{specializations}</h1>
        </div>)
    }
</div>
  )
}
export default Specializations
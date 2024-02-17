import React from 'react'

const Educations = ({educations}) => {
  return (
    <div className='mt-2'>
        {
            educations?.map((education, index)=>  <div key={index} className='border-b border-x first:border-t px-4 border-textColor hover:bg-neutral-100 duration-300'> 
            <div className='flex flex-wrap items-center justify-between'>
            <h1 className='text-base  font-normal text-neutral-500 py-3 '>{education.plateform}, ({education.to}-{education.from})</h1>
            <h1 className='text-lg  font-medium text-neutral-400 py-3 '>{education.Deploma}</h1>
            </div>
            </div>)
        }

    </div>
  )
}

export default Educations
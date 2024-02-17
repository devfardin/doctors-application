import React from 'react'

const Languages = ({languages}) => {
  return (
    <div className='flex mt-3 items-center flex-wrap gap-5'>
    {
        languages?.map((language, index)=> <div key={index}>
            <h1 className='text-base  font-normal text-neutral-500  flex items-center justify-start'> <span className='text-4xl font-medium text-primery mr-2 w-1.5 h-1.5 rounded-full bg-primery '></span> {language}</h1>
        </div>)
    }
</div>
  )
}

export default Languages
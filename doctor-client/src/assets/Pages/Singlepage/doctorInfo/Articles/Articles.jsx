import React from 'react'
import NoContent from '../../../../Share/Doctors/NoContent'

const Articles = () => {
  return (
    <div className='mt-2 p-4'>
       <h1 className='text-xl font-medium text-neutral-600 mb-4'>Articles</h1>
       <NoContent title='No Articl posted yet.' />
    </div>
  )
}

export default Articles
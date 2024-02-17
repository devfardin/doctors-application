import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


const Location = () => {
    const [ipAddress, setIpAddress]=useState('')
    const [getVisitorAddress, setGetVisitorAddress]=useState({})
    useEffect(()=>{
        try{
            fetch('https://api.ipify.org/')
        .then(res=> res.text())
        .then(data=>setIpAddress(data))
        }
        catch{
        toast.error('Your Ip Address Not valid')
        }
    },[])
  

  return (
    <div className='mt-2 p-4'>
    <h1 className='text-xl font-medium text-neutral-600 mb-4'>Doctor Location</h1>
    </div>
  )
}

export default Location
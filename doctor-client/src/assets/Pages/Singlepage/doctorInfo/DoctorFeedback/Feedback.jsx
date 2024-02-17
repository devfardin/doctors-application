import React from 'react'
import NoContent from '../../../../Share/Doctors/NoContent'
import ReactStars from 'react-stars'

const Feedback = ({doctor}) => {
    const {feedback}=doctor
  return (
    <div className='mt-2 p-4'>
       <h1 className='text-xl font-medium text-neutral-600 mb-4'>Patient Feedback</h1>
       {
        feedback.length<=0 ?  <NoContent title='No patient feedback yet now.' /> :
        <div>
          {
            feedback.map((feed, index)=> <dvi key={index}>
               <div className='bg-neutral-100 p-4 rounded-lg mb-3 flex gap-4'>
                  <img className='w-20 h-20 rounded-full' src={feed.image} alt="" />
                  <div>
                    <h1 className='text-xl font-medium text-neutral-600'>{feed.name}</h1>
                    <h1 className='text-neutral-500 font-normal text-base'>{feed.email}</h1>
                    <div className='flex items-center gap-2'>
                    <ReactStars
                      value={feed.rating}
                      edit={false}
                       size={22}
                       color2={'#ffd700'} />
                       <h1 className='text-base font-medium text-neutral-600'>{feed.rating}</h1>
                    </div>
                    <h1 className='text-neutral-500 font-normal text-base'>{feed.description}</h1>
                  </div>
               </div>
            </dvi>)
          }
        </div>

       }
    </div>
    
  )
}

export default Feedback
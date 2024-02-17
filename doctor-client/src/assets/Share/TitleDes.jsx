import Aos from "aos"
import { useEffect } from "react"

const TitleDes = ({title, des}) => {
  useEffect(()=>{
    Aos.init({
      duration:1000
    })
   },[])
  return (
    <div className="max-w-4xl mx-auto" data-aos='fade-up'>
        <h1 className='text-4xl font-semibold text-secondery mb-3 text-center'>{title}</h1>
        <h1 className='text-base font-normal text-neutral-500 text-center'>{des}</h1>
    </div>
  )
}

export default TitleDes
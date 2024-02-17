import React, { useState } from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import ChildAccordion from './ChildAccordion';
const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};
const EducationAccordion = ({offers}) => {
const [open, setOpen] = useState(0);
const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div>
        {
             offers.map((offer, index) => <div key={index} className='my-3'>
             <Accordion open={open === index + 1} animate={CUSTOM_ANIMATION} className='border border-neutral-300 mb-3 rounded '>
                 <AccordionHeader onClick={() => handleOpen(index + 1)} className={`py-3 px-5 bg-[#f1f1f1]  border-none rounded${open === index + 1 ? "text-blue-500 border" : ""
                     }`}>
                     <div>
                         <h1 className='text-lg font-normal text-neutral-600 mb-0'>{offer.offerType}</h1>
                         <span className='text-sm text-neutral-500 font-normal  block'>{offer.offerDescription.length} Service(s)</span>
                     </div>
                 </AccordionHeader>
                 <AccordionBody>
                     {/* Accorion body */}
                     <ChildAccordion  offersData={offer.offerDescription}/>
                     {/* Accorion body */}
                 </AccordionBody>
             </Accordion>
         </div>)
        }
    </div>
  )
}

export default EducationAccordion
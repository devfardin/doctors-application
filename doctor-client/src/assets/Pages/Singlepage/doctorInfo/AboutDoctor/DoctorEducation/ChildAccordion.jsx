import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
}
const ChildAccordion = ({ offersData }) => {
    const [subOpen, setSubOpen] = useState(1);
    const handleSubOpen = (subValue) => setSubOpen(subOpen === subValue ? 0 : subValue);
    const [description, setdesription] = useState([])
    useEffect(() => {
        setdesription(description)
    }, [offersData])
    return (
        <div>
            {
                offersData.map((offer, index) => <Accordion key={index} open={subOpen === index + 1} animate={CUSTOM_ANIMATION}>
                    <AccordionHeader onClick={() => handleSubOpen(index + 1)} className={`py-3 px-5 mt- border border-neutral-300 ${subOpen === index + 1 ? "text-blue-500 border-x-0 bg-[#f1f1f1]" : "bg-none border-b-0 border-x-0"
                        }`}>
                        <div className="flex items-center justify-between w-full">

                            <h1 className='text-base font-normal text-neutral-600 mb-0'> {offer.name}</h1>

                            <h1 className='text-base font-medium text-neutral-600 mb-0'>${offer.price}</h1>
                        </div>
                    </AccordionHeader>
                    <AccordionBody>
                        <p className='text-sm font-normal text-neutral-500 px-4 py-5'>
                            {offer.description}
                        </p>
                    </AccordionBody>
                </Accordion>

                )

            }
        </div>
    )
}

export default ChildAccordion
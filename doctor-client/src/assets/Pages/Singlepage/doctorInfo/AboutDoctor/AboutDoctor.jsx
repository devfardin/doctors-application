import React, { useEffect, useState } from 'react'

import EducationAccordion from './DoctorEducation/EducationAccordion';
import Experience from '../AboutDoctor/DoctorEducation/Experience';
import AboutTitle from './AboutTitle';
import Educations from './Education/Educations';
import Specializations from './Specializations/Specializations';
import Languages from './Languages/Languages';
import Gallery from './gallery/Gallery';

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};

const AboutDoctor = ({ doctor }) => {
    const { name, email, title, profile, address, mapLocation, feedback, price, shortDescription, description, availableTime, offeredServices, experience, education, specializations, languages, registrations, gallery } = doctor
    const [offers, setOffers] = useState([])
    useEffect(() => {
        setOffers(offeredServices)
    }, [doctor])

    return (
        <div className='mt-5 p-4'>
            <h1 className='text-xl font-medium text-neutral-600 mb-3'>About "{name}"</h1>
            <h1 className='text-neutral-500 font-normal text-base'>About {description}</h1>

            {/* Doctor service Infor accodrion */}
            <div>
                <AboutTitle title='Offered Services' />
                <EducationAccordion offers={offers} />
            </div>

            {/* Doctor Experience*/}
            <div>
                <AboutTitle title='Experience' />
                <Experience experience={experience} />
            </div>

            {/* Doctor Education*/}
            <div>
                <AboutTitle title='Education' />
                <Educations educations={education} />
            </div>

            {/* Doctor Specializations*/}
            <div>
                <AboutTitle title='Specializations' />
                <Specializations specializations={specializations} />
            </div>
            <div>
                <AboutTitle title='Languages' />
                <Languages languages={languages} />
            </div>
            <div>
                <AboutTitle title='Gallery' />
                <Gallery gallery={gallery} />
            </div>

        </div>
    )
}

export default AboutDoctor
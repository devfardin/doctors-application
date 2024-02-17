import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import ServiceDescription from './Services/ServiceDescription'
import ContactInfo from './ContactInfo/ContactInfo'
import Download from './Download/Download'
import Doctors from './FeatureDoctor.jsx/Doctors'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Services/>
        <ServiceDescription/>
        <ContactInfo/>
        <Download/>
        <Doctors/>
    </div>
  )
}

export default Home
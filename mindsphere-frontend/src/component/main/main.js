import React from 'react'
import Banner from '../banner/banner'
import Expertise from '../expertise/expertise'
import Services from '../our-services/services'
import TestimonialSlider from '../testimonials/testimonials'
import TeamSection from '../our-team/team'
import ContactForm from '../contact-form/contact-us'
// import ServicesPage from '../../pages/service-page/service-page'
import BookingForm from '../../pages/bookingForm/bookingForm'

const MainBody = () => {
  return (
    <>
      <Banner/>
      <Expertise />
      <Services />
      <TestimonialSlider/>
      <TeamSection/>
      <ContactForm/>
    </>
  )
}

export default MainBody
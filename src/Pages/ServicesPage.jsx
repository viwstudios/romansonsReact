import React, { useEffect } from 'react'
import Navbar from '../Common/Navbar'
import Each from '../Services/Each'
import Facts from '../Services/Facts'
import OurServices from '../Services/OurServices'
import Pricing from '../Services/Pricing'
import ServicesHero from '../Services/ServicesHero'

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Navbar />
      <ServicesHero />
      <Pricing />
      <Each />
      {/* <Facts/> */}
      {/* <OurServices/> */}
    </div>
  )
}

export default ServicesPage
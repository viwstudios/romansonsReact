import React, {useEffect} from 'react'
import Navbar from '../Common/Navbar';
import Contact from '../Contact/Contact';
import ContactHero from '../Contact/ContactHero';

const ContactPage = () => {
  useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <div>
      <Navbar />
      <ContactHero />
      <Contact />
    </div>
  )
}

export default ContactPage
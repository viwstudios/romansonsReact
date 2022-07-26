import React, {useEffect} from 'react'

import AboutUsHero from '../About/AboutUsHero'
import AboutUs from '../About/AboutUs';
import Feature from '../About/Feature';
import Team from '../About/Team';
import Mission from '../About/Mission';
import Navbar from '../Common/Navbar';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Navbar />
            <AboutUsHero />
            <AboutUs />
            <Mission />
            {/* <Feature /> */}
            <Team />
        </div>
    )
}

export default AboutPage
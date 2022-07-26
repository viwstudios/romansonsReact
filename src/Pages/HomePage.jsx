import React from 'react'
import Hero from '../Home/Hero'
import NewHero from '../Home/NewHero'
import PublishSteps from '../Home/PublishSteps'

const HomePage = () => {
  return (
    <div>
        <NewHero />
        {/* <Slider/> */}
        <PublishSteps/>
        {/* <Pricing /> */}
        {/* <Features/> */}
    </div>
  )
}

export default HomePage
import React, {useEffect} from 'react'
import Calc from '../Calculator/Calc'

const ExplorePage = () => {
  useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <div>
        <Calc/>
    </div>
  )
}

export default ExplorePage
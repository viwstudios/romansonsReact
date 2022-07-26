import React, {useEffect} from 'react'
import MainGallery from '../Gallery/MainGallery'
import Navbar from '../Common/Navbar'
import GalleryHero from '../Gallery/GalleryHero'

const GalleryPage = () => {
  useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <div>
      <Navbar/>
      <GalleryHero/>
      <MainGallery/>
    </div>

  )
}

export default GalleryPage
import React from 'react'
import HeroSection from '../section/HeroSection'
import AboutSection from '../section/AboutSection'
import HostelFacilities from '../section/HostelFacilities'
import RoomSection from '../section/RoomSection'
import TestimonialSection from '../section/TestimonialSection'
import VideoThumbnail from '../section/VideoThumbnail'


const HomePage = () => {
  return (
    <>
        <HeroSection />
        <AboutSection/>
        <HostelFacilities/>
        <RoomSection/>
        <TestimonialSection/>
        <VideoThumbnail/>
    </>

  )
}

export default HomePage
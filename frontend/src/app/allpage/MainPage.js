import DevelopSection from '@/components/DevelopmentSection/DevelopSection'
import Services from '@/components/layouts/CloudsService/Services'
import BlogsContainer from '@/components/layouts/blogsSection/BlogsContainer'
import ContactUs from '@/components/layouts/contactUs/ContactUs'
import FetchDataContainer from '@/components/layouts/fetchData/FetchDataContainer'
import Footer from '@/components/layouts/footerSEection/Footer'

import HeroContainer from '@/components/layouts/herosection/mainsection/HeroContainer'
import Navbar from '@/components/layouts/navbar/Navbar'
import Pricing from '@/components/layouts/pricing/Pricing'
import TeamSection from '@/components/layouts/teamSection/TeamSection'
import React from 'react'

export default function MainPage() {
  return (
    <div>
        <Navbar/>
      <HeroContainer/>
    
      <Services/>
      <DevelopSection/>
      <FetchDataContainer/>
      <TeamSection/>
      <Pricing/>
      <ContactUs/>
      <BlogsContainer/>
      <Footer/>
    </div>
  )
}

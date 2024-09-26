import React from 'react'

import Herosection from './Herosection'
import FeatureProducts from './FeatureProducts'
import RepaiServices from './RepaiServices'
import Testimonials from './Testimonials'
import CallToAction from './CallToAction'
function Home() {
  return (
    <div>
      <Herosection />
      {/* <FeatureProducts products={productData} /> */}
      <RepaiServices />
      {/* <Testimonials testimonials={TestimonialData} /> */}
      <CallToAction />
    </div>
  )
}

export default Home

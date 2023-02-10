import React from 'react'
import { HomeSliderMainSection } from '../components'
import withAuth from '../helper/with-auth'

const homeslider = () => {
  return (
    <div>
      <HomeSliderMainSection />
    </div>
  )
}

export default withAuth( homeslider)

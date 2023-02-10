import React from 'react'
import { AboutMainSection } from '../components'
import withAuth from '../helper/with-auth'

const about = () => {
  return (
    <div>
      <AboutMainSection />
    </div>
  )
}

export default withAuth(about)

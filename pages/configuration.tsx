import React from 'react'
import { ConfigurationMainSection } from '../components'
import withAuth from '../helper/with-auth'

const configuration = () => {
  return (
    <div>
      <ConfigurationMainSection />
    </div>
  )
}

export default withAuth(configuration)

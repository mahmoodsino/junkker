import React from 'react'
import { LiveBidsMainSection } from '../components'
import withAuth from '../helper/with-auth'

const livebids = () => {
  return (
    <div>
      <LiveBidsMainSection />
    </div>
  )
}

export default withAuth( livebids)

import React from 'react'
import { MakeMainSection } from '../components'
import withAuth from '../helper/with-auth'

const make = () => {
  return (
    <div>
      <MakeMainSection />
    </div>
  )
}

export default withAuth( make)

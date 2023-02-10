import React from 'react'
import { SellingMainSection } from '../components'
import withAuth from '../helper/with-auth'

const selling = () => {
  return (
    <div>
      <SellingMainSection />
    </div>
  )
}

export default withAuth( selling)

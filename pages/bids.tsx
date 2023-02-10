import React from 'react'
import { BidsMainSections } from '../components'
import withAuth from '../helper/with-auth'


const bids = () => {
  return (
    <div>
      <BidsMainSections />
    </div>
  )
}

export default withAuth(bids)

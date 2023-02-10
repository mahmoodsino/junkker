import React from 'react'
import { GiftMainSection } from '../components'
import withAuth from '../helper/with-auth'

const giftjunkker = () => {
  return (
    <div>
      <GiftMainSection />
    </div>
  )
}

export default withAuth(giftjunkker)

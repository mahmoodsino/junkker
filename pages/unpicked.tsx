import React from 'react'
import { UnpickedMainSection } from '../components'
import withAuth from '../helper/with-auth'

const unpicked = () => {
  return (
    <div>
      <UnpickedMainSection />
    </div>
  )
}

export default withAuth(unpicked)

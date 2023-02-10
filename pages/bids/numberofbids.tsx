import React from 'react'
import { NumberOfBidsMainSection } from '../../components'
import withAuth from '../../helper/with-auth'

const numberofbids = () => {
  return (
    <div>
      <NumberOfBidsMainSection/>
    </div>
  )
}

export default withAuth( numberofbids)
